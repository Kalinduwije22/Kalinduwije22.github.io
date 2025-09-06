import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-secondary opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-muted-foreground text-lg mb-4 font-medium">
              Hello, I'm
            </p>
          </div>
          
          {/* Name with gradient */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
              Alex Johnson
            </h1>
          </div>
          
          {/* Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-4xl text-muted-foreground mb-8 font-light">
              Hi, I'm Kalindu Wijenayake
            </h2>
          </div>
          
          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Information Technology and Management Student at Univerity of Colombo
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.8s' }}>
            <Button variant="gradient" size="lg" className="hover-glow text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="glass border-glass-border hover:bg-glass text-lg px-8 py-6">
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="animate-scale-in flex justify-center gap-6" style={{ animationDelay: '1s' }}>
            <a 
              href="https://github.com/Kalinduwije22/" 
              className="glass p-4 rounded-full hover-lift hover-glow transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/kalindu-wijenayake-6857571a6" 
              className="glass p-4 rounded-full hover-lift hover-glow transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="kala22293@gmail.com" 
              className="glass p-4 rounded-full hover-lift hover-glow transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
