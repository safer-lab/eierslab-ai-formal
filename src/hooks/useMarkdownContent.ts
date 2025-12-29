import { useState, useEffect } from 'react';
import { loadMarkdownContent, ContentItem } from '@/lib/contentLoader';

export function useMarkdownContent(contentPath: string) {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        // Dynamically import all markdown files from the specified path
        const modules = import.meta.glob('/content/**/*.md', {
          query: '?raw',
          import: 'default'
        });

        // Filter modules by the content path
        const filteredModules: Record<string, () => Promise<unknown>> = {};
        Object.keys(modules).forEach(key => {
          if (key.includes(contentPath)) {
            filteredModules[key] = modules[key] as () => Promise<{ default: string }>;
          }
        });

        const loadedItems = await loadMarkdownContent(filteredModules);
        setItems(loadedItems);
      } catch (error) {
        console.error('Error loading markdown content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentPath]);

  return { items, loading };
}
