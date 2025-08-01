import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Settings, Palette, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["C/C++", "Python", "JavaScript", "TypeScript"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
      color: "bg-green-500/10 text-green-400 border-green-500/30"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "Django", "REST APIs", "WebSockets"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "NoSQL"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/30"
    },
    {
      icon: Settings,
      title: "Dev Tools",
      skills: ["Git", "GitHub", "Vercel", "Linux", "Postman", "NPM/Yarn", "WordPress"],
      color: "bg-pink-500/10 text-pink-400 border-pink-500/30"
    }
  ];

  const frameworks = [
    { name: "MERN Stack", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Django", level: 75 },
    { name: "Express.js", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:bg-card/90 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline" 
                    className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Framework Proficiency */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Framework Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{framework.name}</span>
                  <span className="text-sm text-primary font-semibold">{framework.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${framework.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Highlight */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Specialized in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["MERN Stack", "Full Stack Development", "REST APIs", "React.js", "Node.js"].map((tech, index) => (
              <Badge 
                key={index}
                className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-medium hover:bg-primary/30 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;