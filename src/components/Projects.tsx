import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Computer Vision Model for Medical Diagnosis",
      description: "Deep learning model using CNNs to detect skin cancer from dermoscopy images with 94% accuracy. Deployed as a web application for dermatologists.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      tags: ["PyTorch", "Computer Vision", "ResNet", "FastAPI", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "NLP Sentiment Analysis System",
      description: "Real-time sentiment analysis platform processing social media data using transformers and BERT models with 92% accuracy across multiple languages.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["BERT", "Transformers", "NLP", "Python", "Streamlit"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Predictive Analytics for Stock Trading",
      description: "LSTM-based model predicting stock prices using technical indicators and market sentiment. Achieved 15% better returns than baseline strategies.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      tags: ["LSTM", "Time Series", "NumPy", "Pandas", "TA-Lib"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system for e-commerce platform serving 100K+ users with personalized product suggestions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Collaborative Filtering", "Matrix Factorization", "Spark", "MLlib"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Reinforcement learning model for autonomous drone navigation using computer vision and deep Q-networks for obstacle avoidance.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      tags: ["Reinforcement Learning", "DQN", "OpenCV", "ROS", "Gazebo"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Speech Recognition System",
      description: "End-to-end speech recognition system using wav2vec2 and transformer architectures with support for multiple languages and accents.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
      tags: ["wav2vec2", "Speech Recognition", "Transformers", "LibriSpeech"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent ML projects, demonstrating expertise across different domains and AI techniques.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass rounded-3xl p-4 hover-glow hover-lift transition-all duration-500 group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="glass px-4 py-2 rounded-full text-sm hover-lift hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <Button variant="gradient" className="hover-glow" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="glass border-glass-border hover:bg-glass" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="glass rounded-3xl overflow-hidden hover-lift hover-glow group transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-muted px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" className="glass border-glass-border hover:bg-glass" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
