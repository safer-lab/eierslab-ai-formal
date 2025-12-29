import matter from 'gray-matter';

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
    const { data, content } = matter(markdown);

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
