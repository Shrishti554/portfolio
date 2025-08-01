import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Github, Send, MapPin, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('TeWA11wNZGfLcSmOE');
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_jjwn86p', // Your service ID
        'template_oaeo9tn', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Shrishti Arya', // Your name
        }
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
        duration: 5000, // Show for 5 seconds
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 6000, // Show error longer
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shrishtiarya554@gmail.com",
      href: "mailto:shrishtiarya554@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shrishti-arya-0b1065258",
      href: "https://linkedin.com/in/shrishti-arya-0b1065258",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Shrishti554",
      href: "https://github.com/Shrishti554",
      color: "text-gray-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, India",
      href: "#",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, whether it's a freelance project, 
                collaboration, or a full-time position. Feel free to reach out through any of the 
                channels below or use the contact form.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className="glass-card p-4 hover:bg-card/90 transition-all duration-300 hover:scale-105 group"
                >
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-opacity-10 ${item.color.replace('text-', 'bg-').replace('-400', '-500/10').replace('-500', '-500/10')}`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Currently available for freelance projects and open to discussing 
                    full-time opportunities. I typically respond to messages within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Send Me a Message</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 bg-input border-border focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 bg-input border-border focus:border-primary"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 bg-input border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium glow-effect transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Prefer a quick chat? Feel free to connect with me on{' '}
              <a 
                href="https://linkedin.com/in/shrishti-arya-0b1065258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                LinkedIn
              </a>{' '}
              or send an email directly to{' '}
              <a 
                href="mailto:shrishtiarya554@gmail.com"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                shrishtiarya554@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;