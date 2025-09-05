import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with modern best practices.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver results quickly and reliably.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to bring innovative ideas to life.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience in web development, I specialize in creating 
            modern, responsive applications using cutting-edge technologies. I'm passionate 
            about solving complex problems and turning ideas into reality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed">
            Started my journey as a curious developer, I've evolved into a versatile professional 
            who bridges the gap between design and development. I believe in continuous learning, 
            staying updated with the latest technologies, and always striving to deliver 
            exceptional results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;