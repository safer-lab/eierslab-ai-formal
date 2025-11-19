import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const Research = () => {
  const { items: researchAreas, loading } = useMarkdownContent('research');

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">Research</h1>

          {loading ? (
            <p className="text-gray-600">Loading research areas...</p>
          ) : (
            <div className="space-y-16">
              {researchAreas.map((area) => (
                <div key={area.slug} className="border-l-2 border-gray-200 pl-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    {area.metadata.title}
                  </h2>
                  <div className="prose prose-lg text-gray-600">
                    <MarkdownRenderer content={area.content} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {researchAreas.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Add research areas to the <code className="bg-gray-100 px-2 py-1 rounded">content/research/</code> folder.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
