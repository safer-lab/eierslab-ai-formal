import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews, NewsItem } from "@/services/newsService";
import { ExternalLink } from "lucide-react";

const NewsSection = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            const items = await fetchNews();
            setNews(items);
            setLoading(false);
        };
        loadNews();
    }, []);

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-light text-gray-900">Latest News</h2>
                    <Link
                        to="/news"
                        className="text-gray-900 font-medium hover:underline inline-flex items-center"
                    >
                        View all updates →
                    </Link>
                </div>

                {loading ? (
                    <div className="grid md:grid-cols-3 gap-8 animate-pulse">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-20 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <article
                                key={index}
                                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                        {item.source}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {new Date(item.pubDate).toLocaleDateString(undefined, {
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>

                                <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                    {item.contentSnippet}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 mt-auto"
                                >
                                    Read more <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSection;
