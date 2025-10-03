/// <reference types="vite/client" />

interface ImportMeta {
  readonly glob: (pattern: string, options?: {
    query?: string;
    import?: string;
  }) => Record<string, () => Promise<any>>;
}

declare module '*.md' {
  const content: string;
  export default content;
}

