import { Calendar, Users, Award, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Director of Multimedia",
      organization: "Rotaract Club of Delhi Janak",
      period: "July 2023 – June 2024",
      type: "Leadership Role",
      description: "Led multimedia production for events, campaigns, and digital branding. Managed design, video editing, and coordination with cross-functional teams to deliver consistent visual storytelling.",
      achievements: [
        "Designed visual content for 20+ community events and campaigns",
        "Led multimedia team of 8+ members across various projects",
        "Produced promotional videos that increased event attendance by 40%",
        "Established brand guidelines and visual identity standards"
      ],
      color: "border-coral bg-coral/5",
      icon: Award
    },
    {
      title: "Treasurer",
      organization: "Rotaract Club of Delhi Janak", 
      period: "July 2024 – Oct 2024",
      type: "Financial Management",
      description: "Handled budgeting, financial planning, and expense tracking for organizational activities. Maintained transparency and accountability through regular reporting.",
      achievements: [
        "Managed organizational budget of ₹2,00,000+ across multiple projects",
        "Implemented digital expense tracking system improving efficiency by 60%",
        "Prepared monthly financial reports for board meetings",
        "Reduced operational costs by 15% through strategic vendor negotiations"
      ],
      color: "border-navy bg-navy/5",
      icon: Building
    },
    // {
    //   title: "Volunteer",
    //   organization: "Rotaract Club of Delhi Janak",
    //   period: "July 2023 – Present",
    //   type: "Community Service",
    //   description: "Contributed to social initiatives, public service events, and collaborated with teams to execute impactful community projects.",
    //   achievements: [
    //     "Organized community outreach programs serving 500+ beneficiaries",
    //     "Led fundraising campaigns raising ₹50,000+ for social causes",
    //     "Coordinated with local NGOs for skill development workshops",
    //     "Mentored youth in leadership and community engagement"
    //   ],
    //   color: "border-primary bg-primary/5",
    //   icon: Users
    // }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Volunteering
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Community engagement and leadership experiences that shaped my professional journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-elegant group hover:shadow-strong transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full ${exp.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-4 h-4 text-coral" />
                          <span className="text-coral font-semibold text-sm">{exp.organization}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-2">{exp.type}</p>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements Grid */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-primary mr-2" />
                        <span className="font-semibold text-foreground">Key Impact & Achievements</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start group/item">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                            <span className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Developed */}
        <div className="mt-16 scroll-reveal">
          <div className="card-elegant bg-gradient-primary text-white text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">Skills Developed Through Community Engagement</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Team Leadership', 
                  'Project Management', 
                  'Community Outreach', 
                  'Event Coordination',
                  'Public Speaking',
                  'Fundraising',
                  'Collaboration',
                  'Social Impact'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;