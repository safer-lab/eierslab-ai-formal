import { siteConfig } from "@/config/site";

export interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
    source: string;
}

export const fetchNews = async (): Promise<NewsItem[]> => {
    try {
        const rssUrl = siteConfig.news.rssUrl;
        // Use rss2json to convert RSS to JSON
        const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        if (data.status !== "ok") {
            throw new Error("Failed to parse RSS feed");
        }

        // Transform the items to our interface
        return data.items.slice(0, 3).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            contentSnippet: item.description ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + "..." : "",
            source: "TechCrunch AI",
        }));
    } catch (error) {
        console.error("Error fetching news:", error);
        // Return mock data as fallback
        return [
            {
                title: "AI Model Advances in 2024",
                link: "#",
                pubDate: new Date().toISOString(),
                contentSnippet: "Recent breakthroughs in large language models demonstrate significant improvements in reasoning capabilities...",
                source: "AI News Daily",
            },
            {
                title: "New Framework for Federated Learning",
                link: "#",
                pubDate: new Date(Date.now() - 86400000).toISOString(),
                contentSnippet: "Researchers propose a novel approach to federated learning that enhances privacy while maintaining model accuracy...",
                source: "CS Research Weekly",
            },
            {
                title: "Explainable AI in Healthcare",
                link: "#",
                pubDate: new Date(Date.now() - 172800000).toISOString(),
                contentSnippet: "A new study highlights the importance of explainability in AI systems used for medical diagnosis...",
                source: "Tech Review",
            },
        ];
    }
};
