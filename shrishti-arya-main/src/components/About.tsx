import { GraduationCap, Code, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science & Engineering, IPS Academy Indore"
    },
    {
      icon: Code,
      title: "Passion",
      description: "Full-stack web development and real-world problem solving"
    },
    {
      icon: Target,
      title: "Drive",
      description: "Results-oriented approach with focus on meaningful impact"
    },
    {
      icon: Users,
      title: "Experience",
      description: "Real-world development experience at Adlytica"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert">
              <p className="text-foreground leading-relaxed">
                I'm a final-year Computer Science student at <span className="text-primary font-semibold">IPS Academy Indore</span>, 
                pursuing a B.Tech in CSE. I'm passionate about coding, real-world problem solving, and web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by results and motivated by impact. My journey in technology has been focused on 
                building solutions that make a difference, whether it's developing efficient web applications 
                or creating user-friendly interfaces that enhance digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in full-stack development and a strong foundation in computer science 
                principles, I'm always eager to take on new challenges and contribute to meaningful projects.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">Educational Background</h3>
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech in Computer Science & Engineering</h4>
                    <p className="text-primary font-medium">IPS Academy Indore</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover:bg-card/90 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Code className="h-64 w-64 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;