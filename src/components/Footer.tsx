import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors duration-200 font-light">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors duration-200 font-light">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </div>
          
          <p className="text-muted-foreground font-light mb-4">
            Thanks for visiting. Looking forward to connecting with you.
          </p>
          
          <div className="text-sm text-muted-foreground font-light">
            © 2024 Sarah Johnson. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;