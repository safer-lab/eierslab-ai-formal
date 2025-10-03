import { Card } from "@/components/ui/card";
import { Calendar, Award, Users, BookOpen } from "lucide-react";
import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const iconMap: Record<string, any> = {
  publication: BookOpen,
  award: Award,
  team: Users,
  event: Calendar,
};

const News = () => {
  const { items: newsItems, loading } = useMarkdownContent('news');

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      publication: "bg-primary text-primary-foreground",
      award: "bg-accent text-accent-foreground",
      team: "bg-secondary text-secondary-foreground",
      event: "bg-muted text-muted-foreground",
    };
    return colors[category.toLowerCase()] || "bg-muted text-muted-foreground";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Latest news, publications, and achievements from the lab
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading news...</p>
        ) : (
          <div className="space-y-6">
            {newsItems.map((item, index) => {
              const IconComponent = iconMap[item.metadata.category.toLowerCase()] || Calendar;
              return (
                <Card 
                  key={item.slug}
                  className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">{formatDate(item.metadata.date)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.metadata.category)}`}>
                          {item.metadata.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.metadata.title}</h3>
                      <MarkdownRenderer content={item.content} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="mt-12 p-8 bg-muted/50 border-border/50 text-center">
          <h2 className="text-xl font-bold mb-3">Stay Updated</h2>
          <p className="text-muted-foreground">
            Follow our latest research developments and lab activities on 
            <a href="#" className="text-primary hover:underline font-medium"> Twitter</a> and 
            <a href="#" className="text-primary hover:underline font-medium"> LinkedIn</a>.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default News;
