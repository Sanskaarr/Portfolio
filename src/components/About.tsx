import { GraduationCap, MapPin, Globe, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate software developer with a strong foundation in computer science and a drive for innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education & Background */}
          <div className="space-y-8 scroll-reveal">
            <div className="card-elegant">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">MCA - Master of Computer Applications</h4>
                  <p className="text-muted-foreground">Amity University • 2024–2026</p>
                </div>
                <div className="border-l-4 border-coral pl-4">
                  <h4 className="font-semibold text-foreground">BCA - Bachelor of Computer Applications</h4>
                  <p className="text-muted-foreground">GGSIPU • Completed</p>
                </div>
              </div>
            </div>

            <div className="card-elegant">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-coral mr-3" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  🇬🇧 English (Fluent)
                </span>
                <span className="px-3 py-1 bg-coral/10 text-coral rounded-full text-sm font-medium">
                  🇮🇳 Hindi (Fluent)
                </span>
                <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium">
                  🇩🇪 German (Basic)
                </span>
              </div>
            </div>
          </div>

          {/* Interests & Focus */}
          <div className="space-y-8 scroll-reveal">
            <div className="card-elegant">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-navy mr-3" />
                <h3 className="text-xl font-semibold">Technical Interests</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Java Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Data Structures & Algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-navy rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Spring Boot</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-medium">IoT Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Web Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-navy rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Full-Stack Development</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant bg-gradient-primary text-white">
              <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
              <p className="text-white/90 leading-relaxed">
                I'm passionate about building innovative solutions that make a real impact. 
                From developing cost-effective IoT health monitoring systems to creating 
                multilingual applications, I believe technology should be accessible and 
                meaningful for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;