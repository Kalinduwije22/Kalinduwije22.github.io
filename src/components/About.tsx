import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="animate-fade-in">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="glass rounded-3xl p-2 hover-glow transition-all duration-500">
                <img 
                  src={profilePhoto} 
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                About Me
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full mb-8" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in web development, I specialize in creating 
                seamless digital experiences that blend beautiful design with robust functionality. 
                My journey began with a fascination for how code can bring ideas to life.
              </p>
              
              <p>
                I work across the full stack, from crafting pixel-perfect user interfaces 
                with React and TypeScript to building scalable backend systems with Node.js 
                and PostgreSQL. I'm passionate about writing clean, maintainable code and 
                following best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or mentoring junior developers. I believe in the 
                power of continuous learning and collaborative problem-solving.
              </p>
            </div>
            
            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass p-6 rounded-2xl hover-lift">
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass p-6 rounded-2xl hover-lift">
                <h3 className="text-2xl font-bold text-accent mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;