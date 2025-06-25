
import { Calendar, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from "react-router-dom";

const Volunteering = () => {
  const volunteer = [
    {
      id: 1,
      title: 'Director of Multimedia',
      organization: 'Student Organization',
      period: 'July 2023 - June 2024',
      duration: '1 year',
      type: 'Leadership Role',
      description: 'Led multimedia initiatives and creative content development for student events and campaigns.',
      responsibilities: [
        'Managed multimedia content creation team of 8 members',
        'Coordinated video production and graphic design projects',
        'Implemented digital marketing strategies for events',
        'Increased social media engagement by 150%',
        'Organized workshops on digital content creation'
      ],
      skills: ['Team Leadership', 'Project Management', 'Creative Direction', 'Digital Marketing'],
      icon: Users,
      color: 'portfolio-teal'
    },
    {
      id: 2,
      title: 'Treasurer',
      organization: 'Student Council',
      period: 'July 2024 - October 2024',
      duration: '4 months',
      type: 'Financial Management',
      description: 'Managed financial operations and budget planning for student activities and events.',
      responsibilities: [
        'Managed annual budget of ₹2,50,000 for student activities',
        'Maintained detailed financial records and reports',
        'Coordinated funding for 15+ student events',
        'Implemented cost-effective resource allocation strategies',
        'Ensured transparent financial practices and audits'
      ],
      skills: ['Financial Management', 'Budget Planning', 'Analytics', 'Strategic Planning'],
      icon: TrendingUp,
      color: 'portfolio-coral'
    }
  ];

  const achievements = [
    {
      title: 'Team Leadership Excellence',
      description: 'Successfully led cross-functional teams across multiple projects',
      icon: Users,
      color: 'portfolio-teal'
    },
    {
      title: 'Budget Management',
      description: 'Managed substantial budgets with 100% accountability',
      icon: TrendingUp,
      color: 'portfolio-coral'
    },
    {
      title: 'Project Delivery',
      description: 'Consistently delivered projects on time and within scope',
      icon: Award,
      color: 'portfolio-yellow'
    }
  ];

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
            Volunteering & Leadership
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in leadership roles, volunteer work, and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-teal to-portfolio-coral"></div>

          {volunteer.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto md:text-right'
              } md:w-1/2 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-auto ${
                index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'
              } md:transform md:-translate-x-1/2 w-8 h-8 bg-${exp.color} rounded-full border-4 border-portfolio-dark flex items-center justify-center`}>
                <exp.icon className="text-white w-4 h-4" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
              } bg-portfolio-dark-gray/50 p-8 rounded-xl border border-white/10 hover:border-${exp.color}/30 transition-all duration-300`}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} rounded-full text-sm font-medium border border-${exp.color}/30`}>
                      {exp.type}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className={`text-${exp.color} font-medium mb-2`}>{exp.organization}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-gray-400 flex items-start">
                        <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 bg-gradient-to-r from-${exp.color}/10 to-${exp.color}/5 text-gray-300 rounded-lg text-sm border border-${exp.color}/20`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-poppins font-bold text-white text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${achievement.color}/20 to-${achievement.color}/5 p-8 rounded-xl border border-${achievement.color}/30 text-center hover:scale-105 transition-all duration-300`}
              >
                <achievement.icon className={`text-${achievement.color} w-12 h-12 mx-auto mb-4`} />
                <h3 className="text-xl font-poppins font-semibold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-portfolio-teal/10 to-portfolio-coral/10 p-12 rounded-2xl border border-white/10 animate-fade-in">
          <h2 className="text-3xl font-poppins font-bold text-white mb-4">
            Ready for New Challenges
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            With proven leadership Volunteering and technical skills, I'm excited to take on new opportunities 
            and contribute to innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drive.google.com/file/d/1BOuSAUWKBCCczAOrFcNaJxAj44GyqYoc/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            <button className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              View My Resume
            </button>
            </a>
            <Link to="/Contact">
            <button className="border border-portfolio-coral text-portfolio-coral hover:bg-portfolio-coral hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Get In Touch
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;