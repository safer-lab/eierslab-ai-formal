import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const Publications = () => {
  const { items: publications, loading } = useMarkdownContent('publications');

  const getTypeColor = (type: string) => {
    return type === "Conference" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our research contributions to the scientific community
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading publications...</p>
        ) : (
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={pub.slug}
                className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 leading-tight">{pub.metadata.title}</h3>
                      <p className="text-muted-foreground mb-2">{pub.metadata.authors}</p>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(pub.metadata.type)}`}>
                          {pub.metadata.type}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {pub.metadata.venue} • {pub.metadata.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <MarkdownRenderer content={pub.content} />
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pub.metadata.links?.paper && (
                      <a href={pub.metadata.links.paper} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          Paper
                        </Button>
                      </a>
                    )}
                    {pub.metadata.links?.arxiv && (
                      <a href={pub.metadata.links.arxiv} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          arXiv
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-12 p-8 bg-muted/50 border-border/50">
          <h2 className="text-2xl font-bold mb-4">Full Publication List</h2>
          <p className="text-muted-foreground leading-relaxed">
            For a complete and up-to-date list of publications, please visit our research profiles on 
            <a href="#" className="text-primary hover:underline font-medium"> Google Scholar</a>, 
            <a href="#" className="text-primary hover:underline font-medium"> DBLP</a>, or 
            <a href="#" className="text-primary hover:underline font-medium"> arXiv</a>.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Publications;
