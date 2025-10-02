import { Card } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const People = () => {
  const pi = {
    name: "William Eiers",
    title: "Principal Investigator",
    affiliation: "Stevens Institute of Technology",
    bio: "Dr. William Eiers leads research at the intersection of artificial intelligence and formal methods, focusing on neurosymbolic techniques, formal verification, and AI safety. His work combines theoretical foundations with cutting-edge machine learning to develop trustworthy AI systems.",
    links: {
      profile: "https://www.stevens.edu/profile/weiers",
      website: "https://william-eiers.github.io/",
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  };

  const phdStudents = [
    {
      name: "Adarsh Vatsa",
      focus: "AI Safety & Verification of AI Outputs",
      bio: "Working on formal methods for verifying the correctness and safety of AI system outputs, with a focus on detecting and preventing harmful behaviors in deployed models.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Sachi Shome",
      focus: "Federated Learning",
      bio: "Researching privacy-preserving machine learning techniques and distributed optimization methods for collaborative model training without sharing sensitive data.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Bethel Hall",
      focus: "AI Policy & Trustworthy AI",
      bio: "Examining the societal implications of AI technologies and developing frameworks for responsible AI development, governance, and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse group of researchers pushing the boundaries of trustworthy AI
          </p>
        </div>

        {/* Principal Investigator */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Principal Investigator</h2>
          <Card className="p-8 shadow-medium border-border/50">
            <div className="flex flex-col md:flex-row gap-8">
              <img 
                src={pi.image}
                alt={pi.name}
                className="w-48 h-48 rounded-xl object-cover shadow-soft"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{pi.name}</h3>
                <p className="text-primary font-medium mb-1">{pi.title}</p>
                <p className="text-muted-foreground mb-4">{pi.affiliation}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{pi.bio}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={pi.links.profile} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Stevens Profile
                    </Button>
                  </a>
                  <a href={pi.links.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Personal Website
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* PhD Students */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">PhD Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdStudents.map((student, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={student.image}
                  alt={student.name}
                  className="w-32 h-32 rounded-xl object-cover mx-auto mb-4 shadow-soft"
                />
                <h3 className="text-xl font-bold text-center mb-2">{student.name}</h3>
                <p className="text-primary text-sm text-center font-medium mb-4">{student.focus}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{student.bio}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Students */}
        <section>
          <Card className="p-8 bg-muted/50 border-border/50">
            <h2 className="text-2xl font-bold mb-4">Undergraduate & Master's Students</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our lab is proud to mentor a growing group of talented undergraduate and master's students 
              who contribute to our research across all focus areas. These students work on diverse projects 
              ranging from neurosymbolic reasoning to AI safety evaluation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Interested in joining the lab? <a href="/contact" className="text-primary hover:underline font-medium">Learn more</a> about 
              research opportunities for students.
            </p>
          </Card>
        </section>

        {/* Alumni section placeholder */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Alumni</h2>
          <Card className="p-8 border-border/50">
            <p className="text-muted-foreground text-center">
              As the lab grows, this space will celebrate the achievements of our alumni.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default People;
