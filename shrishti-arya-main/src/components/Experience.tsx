import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "Adlytica",
      role: "Web Developer",
      duration: "May 1 – July 31",
      location: "Remote",
      type: "Internship",
      description: [
        "Managed and enhanced company websites with focus on functionality and user experience",
        "Improved website responsiveness across multiple devices and browsers",
        "Integrated dynamic content updates and enhanced content management systems",
        "Maintained clean, documented codebase using Git version control",
        "Collaborated with design team to implement modern UI/UX improvements"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "WordPress", "Responsive Design"],
      achievements: [
        "Improved website loading speed by 40%",
        "Enhanced mobile responsiveness for better user engagement",
        "Implemented modern design patterns and best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world experience building and enhancing web solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Experience card */}
              <div className="glass-card p-8 ml-16 hover:bg-card/90 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills gained section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Skills & Expertise Gained
            </h3>
            <p className="text-muted-foreground mb-6">
              Through my professional experience, I've developed strong skills in web development, 
              project management, and collaborative software development practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Project Management", "Code Review", "Git Workflow", "Performance Optimization",
                "Cross-browser Compatibility", "Responsive Design", "Team Collaboration"
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;