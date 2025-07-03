import { link } from 'fs';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python",
      provider: "HackerRank (2023)",
      description: "Foundational knowledge in Python programming and problem-solving",
      badgeColor: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      skills: ["Python Syntax", "Data Structures", "Algorithm Implementation", "Problem Solving"],
      link: "https://www.hackerrank.com/certificates/3443ffec1fa2"
    },
    {
      title: "SQL - Basic",
      provider: "HackerRank (2022)",
      description: "Basic SQL query construction and database fundamentals",
      badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      skills: ["Basic Queries", "Data Filtering", "Table Operations", "Database Basics"],
      link: "https://www.hackerrank.com/certificates/b9c28d6c05a3"
    },
    {
      title: "SQL - Intermediate",
      provider: "HackerRank (2024)",
      description: "Advanced SQL techniques including complex joins and optimization",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      skills: ["Complex Queries", "Joins & Subqueries", "Database Design", "Performance Optimization"],
      link: "https://www.hackerrank.com/certificates/dc7b09af04b4"
    },
    {
      title: "Introduction to CyberSecurity",
      provider: "Cisco Networking Academy (2025)",
      description: "Comprehensive overview of cybersecurity principles and best practices",
      badgeColor: "bg-gradient-to-r from-red-500 to-red-600",
      skills: ["Security Fundamentals", "Network Security", "Risk Assessment", "Threat Analysis"],
      link: "https://www.credly.com/badges/ce55f92e-9533-4750-9468-d7ea3b5e53bc/public_url"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Validated skills and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-elegant group hover:shadow-strong transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certification Badge */}
              <div className="flex items-center mb-6">
                <div className={`${cert.badgeColor} text-white p-4 rounded-xl shadow-lg`}>
                  <Award className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold">{cert.provider}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Skills Covered
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-outline group-hover:scale-105 transition-transform inline-flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="card-elegant bg-gradient-to-r from-primary/10 to-coral/10 border border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Currently pursuing additional certifications in cloud computing,
              advanced algorithms, and modern web frameworks to stay at the
              forefront of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['AWS Cloud', 'Advanced React', 'Spring Boot', 'Docker', 'Kubernetes'].map((learning, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {learning}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;