import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Code, Database, Layers, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies like MERN stack, ensuring scalable and efficient solutions.",
      features: [
        "Complete web application development",
        "Database design and integration",
        "API development and integration",
        "Deployment and maintenance"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive, and user-friendly interfaces with modern frontend frameworks and libraries.",
      features: [
        "Responsive web design",
        "Interactive user interfaces",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Backend/API Integration",
      description: "Building robust backend systems and APIs that power your applications with secure and efficient data management.",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "Authentication and authorization",
        "Third-party integrations"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Layers,
      title: "MERN Stack Projects",
      description: "Specialized in building complete web applications using MongoDB, Express.js, React, and Node.js for maximum efficiency.",
      features: [
        "Full-stack application development",
        "Real-time features implementation",
        "State management solutions",
        "Modern development practices"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge web development solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group glass-card p-8 hover:bg-card/90 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life with modern web development solutions.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium glow-effect"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;