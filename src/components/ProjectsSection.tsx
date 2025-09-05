import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Firebase', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with smooth animations.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2">Featured</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-card/30 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="p-2">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2">
                    <Github className="w-4 h-4" />
                  </Button>
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
