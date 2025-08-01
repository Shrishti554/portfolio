import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import shrishtiProfile from '@/assets/shrishti-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-hero-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="space-y-6 animate-fade-up">
              <div className="space-y-2">
                <p className="text-lg text-primary font-medium animate-delay-100">
                  Hi, I'm
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground animate-delay-200">
                  Shrishti{' '}
                  <span className="text-primary animate-glow">Arya</span>
                </h1>
                <p className="text-xl text-muted-foreground font-medium animate-delay-300">
                  Full Stack Developer
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-delay-400">
                A passionate Full Stack Developer eager to turn real-world ideas into powerful solutions.
                Currently pursuing B.Tech in Computer Science, I'm driven by results and motivated by impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-delay-500">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 glow-effect"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex gap-3 justify-center sm:justify-start">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://github.com/Shrishti554" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/shrishti-arya-0b1065258" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:shrishtiarya554@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="animate-float">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <img 
                    src={shrishtiProfile} 
                    alt="Shrishti Arya - Full Stack Developer" 
                    className="w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-2xl glow-effect"
                  />
                  {/* Profile border glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-primary/50 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;