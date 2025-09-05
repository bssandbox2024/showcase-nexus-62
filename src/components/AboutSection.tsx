import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, BarChart3, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const principles = [
    {
      icon: Target,
      title: 'User-Centric',
      description: 'Every decision starts with understanding user needs and solving real problems.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Using metrics and analytics to guide product decisions and measure success.'
    },
    {
      icon: Users,
      title: 'Cross-Functional',
      description: 'Collaborating effectively with engineering, design, and business teams.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Identifying opportunities and driving product innovation through strategic thinking.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            I'm a product manager with 6+ years of experience building digital products that users love. 
            I specialize in taking ideas from concept to launch, working closely with cross-functional teams 
            to deliver solutions that drive business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-subtle hover:shadow-card transition-all duration-200 bg-background"
            >
              <CardContent className="p-8 text-center">
                <principle.icon className="h-8 w-8 mx-auto mb-6 text-primary" />
                <h3 className="text-lg font-medium mb-4 text-foreground">{principle.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground font-light leading-relaxed">
            I believe great products come from deep user empathy, clear communication, 
            and the ability to balance user needs with business objectives. When I'm not working, 
            you'll find me reading about emerging technologies or mentoring aspiring product managers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;