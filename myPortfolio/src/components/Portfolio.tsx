import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Bot, Users, Database, Monitor } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "AssignMateAI",
      subtitle: "AI-Powered Task Management System",
      description: "A sophisticated MERN stack application that revolutionizes task management with AI-powered features. Integrates Gemini AI for intelligent task categorization, skill analysis, and automated note generation.",
      image: "/api/placeholder/600/400",
      technologies: [
        "MongoDB", "Express.js", "React", "Node.js", "JWT", 
        "Mailtrap", "Nodemailer", "Inngest", "Gemini AI"
      ],
      features: [
        "AI-powered task categorization and prioritization",
        "Smart skill analysis and recommendation system",
        "Automated note generation and documentation",
        "Real-time collaboration and notifications",
        "Secure authentication with JWT",
        "Email integration for task updates"
      ],
      type: "Full Stack",
      status: "Completed",
      github: "https://github.com/Shrishti554",
      live: "#",
      icon: Bot
    },
    {
      title: "Employee Management System",
      subtitle: "React-Based HR Solution",
      description: "A comprehensive employee management system built with React, featuring complete CRUD operations, advanced UI state management, and local storage integration for seamless data persistence.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React", "JavaScript", "Local Storage", "CSS3", 
        "Bootstrap", "React Hooks"
      ],
      features: [
        "Complete CRUD operations for employee data",
        "Advanced UI state management",
        "Local storage for data persistence",
        "Simple and secure authentication system",
        "Reusable component architecture",
        "Responsive design for all devices"
      ],
      type: "Frontend",
      status: "Completed",
      github: "https://github.com/Shrishti554",
      live: "#",
      icon: Users
    }
  ];

  const additionalProjects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      icon: Monitor
    },
    {
      title: "REST API Projects",
      description: "Various backend projects with Express.js and database integration",
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      icon: Database
    }
  ];

  return (
    <section id="portfolio" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden hover:bg-card/90 transition-all duration-300 group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <project.icon className="h-24 w-24 text-primary/40" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="border-green-500/30 text-green-400">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-lg text-primary font-medium mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-2">
                    <Button 
                      variant="outline" 
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalProjects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 hover:bg-card/90 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and exciting projects.
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
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;