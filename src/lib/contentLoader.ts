// Simple browser-compatible frontmatter parser (no Buffer dependency)
function parseFrontmatter(markdown: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatterStr = match[1];
  const content = match[2];

  // Simple YAML parser for common frontmatter fields
  const data: Record<string, any> = {};
  const lines = frontmatterStr.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse numbers
    if (!isNaN(Number(value)) && value !== '') {
      value = Number(value);
    }

    data[key] = value;
  }

  return { data, content };
}

export interface ContentMetadata {
  [key: string]: any;
}

export interface ContentItem {
  metadata: ContentMetadata;
  content: string;
  slug: string;
}

// Helper to import all markdown files from a directory
export async function loadMarkdownContent(
  importGlob: Record<string, () => Promise<unknown>>
): Promise<ContentItem[]> {
  const items: ContentItem[] = [];

  for (const [path, importFn] of Object.entries(importGlob)) {
    const rawContent = await importFn();
    // Handle both cases: raw string or module with default export
    const markdown = typeof rawContent === 'string'
      ? rawContent
      : (rawContent as { default: string }).default;
    const { data, content } = parseFrontmatter(markdown);

    // Extract slug from path
    const slug = path
      .split('/')
      .pop()
      ?.replace(/\.md$/, '') || '';

    items.push({
      metadata: data,
      content,
      slug,
    });
  }

  // Sort by order if specified, otherwise by slug
  return items.sort((a, b) => {
    if (a.metadata.order !== undefined && b.metadata.order !== undefined) {
      return a.metadata.order - b.metadata.order;
    }
    return a.slug.localeCompare(b.slug);
  });
}
