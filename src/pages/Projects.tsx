
import { ExternalLink, Github, Lightbulb, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Karwaanfilms.com',
      role: 'Project Lead',
      description: 'Scalable human-centric media platform built with modern web technologies. Led development, testing, and team coordination for a comprehensive content management system.',
      longDescription: 'A full-featured media platform designed to showcase and manage creative content. Implemented user authentication, content management, responsive design, and optimized performance.',
      tech: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Digital Ocean', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      color: 'portfolio-teal',
      icon: ExternalLink,
      live: "https://karwaanfilms.com",
      github: "https://github.com/Sanskaarr/karwaan-frontend.git",
      highlights: ['Team Leadership', 'Full-Stack Development', 'Performance Optimization', 'Testing Strategy']
    },
    {
      id: 2,
      title: 'Smart Health Monitoring Band (Under Devlopment)',
      role: 'IoT Developer',
      description: 'Cost-effective health monitoring solution built under ₹3000 using IoT sensors. Tracks vital signs including heart rate, temperature, and motion for healthcare accessibility.',
      longDescription: 'An innovative IoT solution addressing healthcare accessibility in India. Integrated multiple sensors with Arduino, developed mobile app interface, and created cloud-based data analytics.',
      tech: ['Arduino', 'IoT Sensors', 'Java', 'Mobile App', 'Cloud Analytics', 'AI'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      color: 'portfolio-coral',
      icon: Heart,
      highlights: ['IoT Integration', 'Cost Optimization', 'Healthcare Focus', 'Real-time Monitoring']
    },
    {
      id: 3,
      title: 'Multilingual Chatbot for Ticket Booking',
      role: 'Full-Stack Developer',
      description: 'Advanced voice-enabled chatbot supporting 8 languages with map-based suggestions. Features intelligent ticket booking with capacity alerts and multilingual switching.',
      longDescription: 'A comprehensive chatbot solution with natural language processing, voice recognition, and intelligent booking system. Supports multiple languages and provides smart recommendations.',
      tech: ['Python', 'NLP', 'Voice API', 'Maps API', 'React', 'Flask'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      color: 'portfolio-yellow',
      icon: MessageSquare,
      live: "https://comprehensive-chatbot.vercel.app",
      github: "https://github.com/Sanskaarr/Comprehensive-Chatbot.git",
      highlights: ['Voice Processing', 'Multi-language Support', 'AI Integration', 'User Experience Design']
    }
  ];

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, from web applications to IoT devices and AI-powered chatbots
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <project.icon className={`text-${project.color} w-8 h-8`} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 bg-${project.color}/20 text-${project.color} rounded-full text-sm font-medium border border-${project.color}/30`}>
                      {project.role}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r from-${project.color}/10 to-${project.color}/5 text-gray-300 rounded-lg text-sm border border-${project.color}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Key Highlights:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-gray-400 text-sm">
                        <Lightbulb className={`text-${project.color} w-4 h-4 mr-2`} />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {project.id !== 2 && (
                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button className={`bg-${project.color} hover:bg-${project.color}/90 text-white transition-all duration-300 hover:scale-105`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button className={`${
                        project.id === 1
                          ? 'bg-white text-[#00d084] border border-[#00d084] hover:bg-[#00d084] hover:text-white'
                          : project.id === 3
                          ? 'bg-white text-[#facc15] border border-[#facc15] hover:bg-[#facc15] hover:text-white'
                          : `border-${project.color}/50 text-${project.color} hover:bg-${project.color}/10`
                      }`}>
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-portfolio-teal/10 to-portfolio-coral/10 p-12 rounded-2xl border border-white/10 animate-fade-in">
          <h2 className="text-3xl font-poppins font-bold text-white mb-4">
            Interested in My Work?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always working on new projects and exploring innovative technologies. 
            Let's discuss how we can collaborate on your next big idea.
          </p>
          
          <Link to="/Contact">
          <Button className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
            Get In Touch
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;