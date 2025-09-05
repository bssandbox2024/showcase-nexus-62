import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Product Strategy',
      skills: ['Product Roadmapping', 'Market Research', 'Competitive Analysis', 'User Research', 'Product Vision', 'Go-to-Market']
    },
    {
      title: 'Analytics & Tools',
      skills: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Figma', 'Miro', 'Notion', 'JIRA', 'SQL']
    },
    {
      title: 'Leadership & Process',
      skills: ['Agile/Scrum', 'Cross-functional Teams', 'Stakeholder Management', 'A/B Testing', 'Feature Prioritization', 'OKRs']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Core competencies that drive successful product outcomes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-0 shadow-subtle hover:shadow-card transition-all duration-200 bg-background"
            >
              <CardContent className="p-8">
                <h3 className="text-lg font-medium mb-6 text-foreground">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-muted-foreground font-light text-sm py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            I combine analytical thinking with creative problem-solving to build products 
            that create meaningful impact for users and sustainable growth for businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;