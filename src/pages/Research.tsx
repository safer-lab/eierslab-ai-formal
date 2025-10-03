import { Card } from "@/components/ui/card";
import { Brain, Shield, AlertTriangle, Network, BookOpen, Layers } from "lucide-react";
import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const iconMap: Record<string, any> = {
  brain: Brain,
  shield: Shield,
  'alert-triangle': AlertTriangle,
  network: Network,
  'book-open': BookOpen,
  layers: Layers,
};

const Research = () => {
  const { items: researchAreas, loading } = useMarkdownContent('research');

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our research combines theoretical rigor with practical impact, advancing the state of the art 
            in trustworthy artificial intelligence
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading research areas...</p>
        ) : (
          <div className="space-y-8">
            {researchAreas.map((area, index) => {
              const IconComponent = iconMap[area.metadata.icon] || Brain;
              return (
                <Card 
                  key={area.slug} 
                  className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">{area.metadata.title}</h2>
                      <MarkdownRenderer content={area.content} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Collaborations */}
        <section className="mt-20">
          <Card className="p-8 bg-muted/50 border-border/50">
            <h2 className="text-2xl font-bold mb-4">Collaborations & Partnerships</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We actively collaborate with researchers across computer science, mathematics, and related fields. 
              Our lab maintains partnerships with industry leaders and academic institutions worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Interested in collaborating? <a href="/contact" className="text-primary hover:underline font-medium">Get in touch</a> to discuss potential research opportunities.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Research;
