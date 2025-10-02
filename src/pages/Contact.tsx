import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, GraduationCap, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interested in our research? Looking to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="p-8 mb-12 shadow-medium border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:weiers@stevens.edu" className="text-muted-foreground hover:text-primary">
                      weiers@stevens.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Stevens Institute of Technology<br />
                      Hoboken, NJ 07030
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <p className="text-muted-foreground mb-4">
                By appointment. Please email to schedule a meeting.
              </p>
              <a href="https://www.stevens.edu/profile/weiers" target="_blank" rel="noopener noreferrer">
                <Button>
                  Visit Faculty Profile
                </Button>
              </a>
            </div>
          </div>
        </Card>

        {/* Join the Lab */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 hover:shadow-large transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Prospective PhD Students</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are looking for motivated PhD students with strong backgrounds in computer science, 
              mathematics, or related fields. Experience in machine learning, formal methods, or both is valuable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're interested in pursuing research at the intersection of AI and formal methods, 
              please apply through the Stevens CS PhD program and mention our lab in your application.
            </p>
            <Button variant="outline">Learn More About PhD Program</Button>
          </Card>

          <Card className="p-8 hover:shadow-large transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Undergraduate & Master's Students</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We regularly work with talented undergraduate and master's students on research projects. 
              These opportunities provide hands-on experience with cutting-edge AI research.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're a Stevens student interested in getting involved, please reach out via email 
              with your CV and a brief description of your research interests.
            </p>
            <Button variant="outline">Contact Us</Button>
          </Card>
        </div>

        {/* Collaborations */}
        <Card className="p-8 bg-muted/50 border-border/50">
          <h2 className="text-2xl font-bold mb-4">Research Collaborations</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are always interested in collaborating with researchers from academia and industry 
            who share our interests in trustworthy AI, formal methods, and neurosymbolic systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you're working on related problems or have ideas for potential collaborations, 
            please don't hesitate to get in touch. We're open to joint research projects, 
            visiting researcher arrangements, and industry partnerships.
          </p>
          <Button>
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
