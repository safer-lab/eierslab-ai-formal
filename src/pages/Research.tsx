import { Card } from "@/components/ui/card";
import { Brain, Shield, Users, Lock, BookOpen, Code } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Neurosymbolic AI",
      description: "We develop hybrid AI systems that combine the learning capabilities of neural networks with the reasoning power of symbolic AI. Our work aims to create more interpretable, robust, and efficient AI models.",
      topics: ["Neural-symbolic integration", "Differentiable reasoning", "Hybrid architectures", "Knowledge representation"],
    },
    {
      icon: Shield,
      title: "Formal Verification",
      description: "Using rigorous mathematical methods to prove properties of AI systems, ensuring they behave correctly and safely under all conditions. We develop novel verification techniques for neural networks and learning algorithms.",
      topics: ["Neural network verification", "Property specification", "Automated theorem proving", "Safety guarantees"],
    },
    {
      icon: Lock,
      title: "AI Safety",
      description: "Research focused on ensuring AI systems are aligned with human values and operate safely in real-world environments. We work on detecting and preventing harmful AI behaviors.",
      topics: ["Output verification", "Adversarial robustness", "Alignment research", "Safety evaluation"],
    },
    {
      icon: Users,
      title: "Federated Learning",
      description: "Developing privacy-preserving machine learning techniques that enable collaborative model training without sharing sensitive data. Our work focuses on both theoretical foundations and practical applications.",
      topics: ["Privacy-preserving ML", "Distributed optimization", "Secure aggregation", "Fairness in FL"],
    },
    {
      icon: BookOpen,
      title: "AI Policy & Ethics",
      description: "Examining the societal implications of AI technologies and developing frameworks for responsible AI development and deployment. We bridge technical research with policy considerations.",
      topics: ["Trustworthy AI frameworks", "Regulatory compliance", "Ethical AI design", "Governance models"],
    },
    {
      icon: Code,
      title: "Theoretical Foundations",
      description: "Building rigorous mathematical foundations for AI systems, from learning theory to computational complexity. Our theoretical work informs the development of more principled AI methods.",
      topics: ["Learning theory", "Complexity analysis", "Algorithmic fairness", "Information theory"],
    },
  ];

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

        <div className="space-y-8">
          {researchAreas.map((area, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{area.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

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
