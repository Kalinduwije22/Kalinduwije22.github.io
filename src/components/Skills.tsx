import { Code, Database, Palette, Smartphone, Server, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "REST APIs", "GraphQL"],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Redis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "DevOps & Tools",
      skills: ["Git", "CI/CD", "Webpack", "Jest", "Agile/Scrum"],
      color: "from-cyan-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-secondary opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="glass rounded-3xl p-8 hover-lift hover-glow group transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-2 animate-fade-in"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <span className="text-muted-foreground hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional skills bar */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground mb-8">
            Always learning and exploring new technologies...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI/ML", "Blockchain", "WebAssembly", "Three.js", "Rust"].map((tech) => (
              <span 
                key={tech}
                className="glass px-6 py-3 rounded-full text-sm hover-lift hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;