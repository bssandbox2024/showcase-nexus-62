import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
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
          
          <p className="text-muted-foreground mb-4">
            Thanks for visiting my portfolio. Let's create something amazing together!
          </p>
          
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>© 2024 John Developer. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;