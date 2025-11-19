import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const News = () => {
  const { items: newsItems, loading } = useMarkdownContent('news');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">News</h1>

          {loading ? (
            <p className="text-gray-600">Loading news...</p>
          ) : newsItems.length > 0 ? (
            <div className="space-y-10">
              {newsItems.map((item) => (
                <div key={item.slug} className="border-l-2 border-gray-200 pl-8">
                  <p className="text-sm text-gray-500 mb-2">{formatDate(item.metadata.date)}</p>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{item.metadata.title}</h3>
                  <div className="prose text-gray-600">
                    <MarkdownRenderer content={item.content} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Add news items to the <code className="bg-gray-100 px-2 py-1 rounded">content/news/</code> folder.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
