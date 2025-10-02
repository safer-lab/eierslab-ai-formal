import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Formal Verification of Neurosymbolic Systems: A Framework for Guaranteed Safety",
      authors: "W. Eiers, A. Vatsa, et al.",
      venue: "NeurIPS 2025",
      year: "2025",
      type: "Conference",
      links: {
        paper: "#",
        arxiv: "#",
      },
      abstract: "We present a novel framework for formally verifying neurosymbolic AI systems, providing mathematical guarantees about their behavior and safety properties.",
    },
    {
      title: "Privacy-Preserving Federated Learning with Differential Privacy Guarantees",
      authors: "S. Shome, W. Eiers, et al.",
      venue: "ICML 2025",
      year: "2025",
      type: "Conference",
      links: {
        paper: "#",
        arxiv: "#",
      },
      abstract: "This work introduces a new approach to federated learning that provides provable differential privacy guarantees while maintaining model performance.",
    },
    {
      title: "Trustworthy AI: A Policy Framework for Responsible Development",
      authors: "B. Hall, W. Eiers",
      venue: "AI & Society",
      year: "2024",
      type: "Journal",
      links: {
        paper: "#",
      },
      abstract: "We propose a comprehensive policy framework for developing and deploying trustworthy AI systems, addressing regulatory compliance and ethical considerations.",
    },
    {
      title: "Neural-Symbolic Integration for Robust Reasoning Systems",
      authors: "W. Eiers, A. Vatsa",
      venue: "AAAI 2024",
      year: "2024",
      type: "Conference",
      links: {
        paper: "#",
        arxiv: "#",
      },
      abstract: "A new architecture for integrating neural and symbolic components that achieves improved robustness and interpretability in reasoning tasks.",
    },
    {
      title: "Verification of Deep Learning Models: A Survey",
      authors: "A. Vatsa, W. Eiers",
      venue: "ACM Computing Surveys",
      year: "2024",
      type: "Journal",
      links: {
        paper: "#",
      },
      abstract: "A comprehensive survey of formal verification methods for deep learning models, covering both theoretical foundations and practical tools.",
    },
  ];

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

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 leading-tight">{pub.title}</h3>
                    <p className="text-muted-foreground mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(pub.type)}`}>
                        {pub.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {pub.venue} • {pub.year}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.links.paper && (
                    <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Paper
                      </Button>
                    </a>
                  )}
                  {pub.links.arxiv && (
                    <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer">
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
