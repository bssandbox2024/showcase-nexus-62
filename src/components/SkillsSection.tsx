import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'GraphQL'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-6">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;