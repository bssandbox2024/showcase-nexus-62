import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent">
            John Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Passionate about creating innovative solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;