import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Shrishti554",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shrishti-arya-0b1065258",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:shrishtiarya554@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hero-bg border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">SA</span>
              <span className="text-lg font-semibold text-foreground">Shrishti Arya</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and turning ideas into powerful digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:shrishtiarya554@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  shrishtiarya554@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Indore, India</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="text-foreground">Open for opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Shrishti Arya. Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;