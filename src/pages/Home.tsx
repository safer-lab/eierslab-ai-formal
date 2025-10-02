import { ArrowRight, Brain, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Neurosymbolic AI",
      description: "Bridging neural and symbolic reasoning for more interpretable and robust AI systems",
    },
    {
      icon: Shield,
      title: "Formal Verification",
      description: "Mathematical guarantees for AI safety and correctness through rigorous verification",
    },
    {
      icon: Network,
      title: "Trustworthy AI",
      description: "Building AI systems that are safe, reliable, and aligned with human values",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI × Formal Methods
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advancing the science of trustworthy artificial intelligence through neurosymbolic techniques, 
              formal verification, and rigorous foundations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delayed">
              <Link to="/research">
                <Button size="lg" className="group">
                  Explore Our Research
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Join the Lab
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 sm:p-12 shadow-medium border-border/50">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Eiers Lab sits at the intersection of artificial intelligence and formal methods, 
              combining cutting-edge machine learning with rigorous theoretical foundations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We develop neurosymbolic techniques that bring together the power of neural networks 
              with the guarantees of formal verification, working toward AI systems that are not only 
              powerful, but also safe, interpretable, and trustworthy.
            </p>
          </Card>
        </div>
      </section>

      {/* Recent News Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Latest Updates</h2>
            <Link to="/news">
              <Button variant="ghost">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <p className="text-sm text-muted-foreground mb-2">March 2025</p>
              <h3 className="text-xl font-semibold mb-2">New Paper on AI Safety</h3>
              <p className="text-muted-foreground">
                Our latest work on formal verification of neural networks accepted to NeurIPS 2025
              </p>
            </Card>
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <p className="text-sm text-muted-foreground mb-2">February 2025</p>
              <h3 className="text-xl font-semibold mb-2">Lab Welcomes New PhD Students</h3>
              <p className="text-muted-foreground">
                Excited to welcome three new PhD students joining our research team
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
