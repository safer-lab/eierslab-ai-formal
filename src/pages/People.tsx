import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const People = () => {
  const { items: phdStudents, loading } = useMarkdownContent('students/phd');
  const { items: piData, loading: piLoading } = useMarkdownContent('pi');

  const pi = piData[0] || {
    metadata: {
      name: "William Eiers",
      title: "Principal Investigator",
      affiliation: "Stevens Institute of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      links: {
        profile: "https://www.stevens.edu/profile/weiers",
        website: "https://william-eiers.github.io/",
      },
    },
    content: "Dr. William Eiers leads research at the intersection of artificial intelligence and formal methods.",
  };

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
          {piLoading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : (
            <Card className="p-8 shadow-medium border-border/50">
              <div className="flex flex-col md:flex-row gap-8">
                <img 
                  src={pi.metadata.image}
                  alt={pi.metadata.name}
                  className="w-48 h-48 rounded-xl object-cover shadow-soft"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{pi.metadata.name}</h3>
                  <p className="text-primary font-medium mb-1">{pi.metadata.title}</p>
                  <p className="text-muted-foreground mb-4">{pi.metadata.affiliation}</p>
                  <MarkdownRenderer content={pi.content} className="mb-6" />
                  <div className="flex flex-wrap gap-3">
                    {pi.metadata.links?.profile && (
                      <a href={pi.metadata.links.profile} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Stevens Profile
                        </Button>
                      </a>
                    )}
                    {pi.metadata.links?.website && (
                      <a href={pi.metadata.links.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Personal Website
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </section>

        {/* PhD Students */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">PhD Students</h2>
          {loading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdStudents.map((student, index) => (
                <Card 
                  key={student.slug}
                  className="p-6 hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={student.metadata.photo || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"}
                    alt={student.metadata.name}
                    className="w-32 h-32 rounded-xl object-cover mx-auto mb-4 shadow-soft"
                  />
                  <h3 className="text-xl font-bold text-center mb-2">{student.metadata.name}</h3>
                  <p className="text-primary text-sm text-center font-medium mb-4">{student.metadata.research}</p>
                  <MarkdownRenderer content={student.content} className="text-sm" />
                </Card>
              ))}
            </div>
          )}
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
