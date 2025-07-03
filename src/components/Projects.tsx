import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Karwaanfilms.com",
      role: "Project Lead",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS", "Digital Ocean", "Vercel"],
      description: "Scalable human-centric media platform built with modern web technologies. Led development, testing, and team coordination for a comprehensive content management system.",
      detailedDescription: "A full-featured media platform designed to showcase and manage creative content. Implemented user authentication, content management, responsive design, and optimized performance.",
      highlights: ["Team Leadership", "Full-Stack Development", "Performance Optimization", "Testing Strategy"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      demoUrl: "https://karwaanfilms.com/",
      githubUrl: "https://github.com/Sanskaarr/karwaan-frontend.git",
      gradient: "from-primary to-primary/80"
    },
    {
      title: "Smart Health Monitoring Band (Under Development)",
      role: "IoT Developer", 
      tech: ["Arduino", "IoT Sensors", "Java", "Mobile App", "Cloud Analytics", "AI"],
      description: "Cost-effective health monitoring solution built under ₹3000 using IoT sensors. Tracks vital signs including heart rate, temperature, and motion for healthcare accessibility.",
      detailedDescription: "An innovative IoT solution addressing healthcare accessibility in India. Integrated multiple sensors with Arduino, developed mobile app interface, and created cloud-based data analytics.",
      highlights: ["IoT Integration", "Cost Optimization", "Healthcare Focus", "Real-time Monitoring"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      demoUrl: null,
      githubUrl: null,
      gradient: "from-coral to-coral/80"
    },
    {
      title: "Multilingual Chatbot for Ticket Booking",
      role: "Full-Stack Developer",
      tech: ["Voice Recognition", "Maps API", "8 Languages", "Chatbot AI", "Mobile App"],
      description: "Advanced voice-enabled chatbot supporting 8 languages with map-based suggestions. Features intelligent ticket booking with capacity alerts and multilingual support.",
      detailedDescription: "Built an intelligent ticketing system supporting 8 languages with voice commands and integrated mapping for seamless user experience. Features real-time capacity monitoring and smart suggestions.",
      highlights: ["Voice Commands", "Multi-language Support", "Maps Integration", "Real-time Updates"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-navy to-navy/80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions I've built to solve real-world problems
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="scroll-reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl shadow-strong group-hover:shadow-glow transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {project.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group-hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline group-hover:scale-105 transition-transform"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    )}
                    {project.title === "Smart Health Monitoring Band (Under Development)" && (
                      <button 
                        className="btn-outline group-hover:scale-105 transition-transform cursor-not-allowed"
                        disabled
                      >
                        🔧 Under Development
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="bg-gradient-primary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <button className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;