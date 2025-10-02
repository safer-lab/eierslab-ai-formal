import { Card } from "@/components/ui/card";
import { Calendar, Award, Users, BookOpen } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "March 15, 2025",
      category: "Publication",
      icon: BookOpen,
      title: "Paper Accepted to NeurIPS 2025",
      content: "Our work on formal verification of neurosymbolic systems has been accepted to NeurIPS 2025. This paper presents a novel framework for providing mathematical guarantees about AI system behavior.",
    },
    {
      date: "March 1, 2025",
      category: "Award",
      icon: Award,
      title: "NSF CAREER Award",
      content: "Dr. Eiers has been awarded an NSF CAREER grant to support research on trustworthy AI systems. The five-year grant will fund work on neurosymbolic verification and AI safety.",
    },
    {
      date: "February 20, 2025",
      category: "Team",
      icon: Users,
      title: "New PhD Students Join the Lab",
      content: "We are excited to welcome three new PhD students to the lab. They will be working on projects spanning AI safety, federated learning, and AI policy.",
    },
    {
      date: "January 10, 2025",
      category: "Publication",
      icon: BookOpen,
      title: "Privacy-Preserving FL Paper Accepted to ICML",
      content: "Sachi Shome's paper on privacy-preserving federated learning with differential privacy guarantees has been accepted to ICML 2025.",
    },
    {
      date: "December 5, 2024",
      category: "Event",
      icon: Calendar,
      title: "Workshop on Trustworthy AI",
      content: "The lab co-organized a successful workshop on Trustworthy AI at Stevens Institute, bringing together researchers from academia and industry to discuss challenges and opportunities.",
    },
    {
      date: "November 18, 2024",
      category: "Publication",
      icon: BookOpen,
      title: "Survey Paper Published in ACM Computing Surveys",
      content: "Our comprehensive survey on verification methods for deep learning models has been published in ACM Computing Surveys, providing a roadmap for the field.",
    },
    {
      date: "October 22, 2024",
      category: "Award",
      icon: Award,
      title: "Best Paper Award at AAAI",
      content: "Our work on neural-symbolic integration received the Best Paper Award at AAAI 2024, recognizing its contributions to robust reasoning systems.",
    },
    {
      date: "September 1, 2024",
      category: "Team",
      icon: Users,
      title: "Lab Welcomes Undergraduate Researchers",
      content: "Five talented undergraduate students joined the lab for the fall semester, working on projects in AI safety evaluation and neurosymbolic reasoning.",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Publication: "bg-primary text-primary-foreground",
      Award: "bg-accent text-accent-foreground",
      Team: "bg-secondary text-secondary-foreground",
      Event: "bg-muted text-muted-foreground",
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
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

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

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
