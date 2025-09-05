import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Mobile Banking App Redesign',
      description: 'Led the complete redesign of a mobile banking app, improving user engagement by 40% and reducing support tickets by 35%.',
      metrics: ['40% increase in engagement', '35% reduction in support tickets', '4.8/5 app store rating'],
      skills: ['User Research', 'A/B Testing', 'Cross-platform Design'],
      icon: TrendingUp,
      featured: true
    },
    {
      title: 'E-commerce Personalization',
      description: 'Developed ML-powered product recommendation system that increased conversion rates and average order value.',
      metrics: ['25% increase in conversion', '18% higher AOV', '2M+ users'],
      skills: ['Machine Learning', 'Analytics', 'Product Strategy'],
      icon: Target,
      featured: true
    },
    {
      title: 'SaaS Dashboard Platform',
      description: 'Built comprehensive analytics dashboard for B2B clients, enabling better data-driven decision making.',
      metrics: ['200+ enterprise clients', '99.9% uptime', '85% user satisfaction'],
      skills: ['B2B Product', 'Data Visualization', 'Enterprise Sales'],
      icon: Users,
      featured: false
    },
    {
      title: 'Subscription Growth Initiative',
      description: 'Optimized pricing strategy and onboarding flow, significantly improving subscription conversion and retention.',
      metrics: ['30% increase in subscriptions', '20% better retention', '$2M+ ARR growth'],
      skills: ['Pricing Strategy', 'User Onboarding', 'Growth Metrics'],
      icon: DollarSign,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground tracking-tight">
            Key Projects
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Product initiatives that delivered measurable business impact
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-lg transition-all duration-200 bg-background overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-lg">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-sm text-muted-foreground font-light">
                          • {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs font-light">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index}
              className="border-0 shadow-subtle hover:shadow-card transition-all duration-200 bg-background"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <project.icon className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-xs text-muted-foreground font-light">
                  {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                    <div key={metricIndex}>• {metric}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
