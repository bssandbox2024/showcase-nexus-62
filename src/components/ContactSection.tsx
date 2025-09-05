import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sarah.johnson@example.com',
      link: 'mailto:sarah.johnson@example.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Interested in working together? I'd love to hear about your product challenges and explore how we can create something amazing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I'm always excited to discuss new product opportunities, share insights about product management, 
                or explore potential collaborations. Whether you're looking for a product manager or just want to 
                chat about product strategy, feel free to reach out.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.title}</p>
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors font-light"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 shadow-card bg-background">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                    <Input placeholder="John" className="border-muted" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="border-muted" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-muted" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
                  <Input placeholder="Your company (optional)" className="border-muted" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your product challenge or opportunity..."
                    className="min-h-32 border-muted"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 transition-colors duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;