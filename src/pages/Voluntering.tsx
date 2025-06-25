
const Volunteering = () => {
  const volunteer = [
    {
      title: "Director of Multimedia",
      period: "July 2023 - June 2024",
      type: "Volunteering",
      responsibilities: [
        "Led multimedia content creation and strategy initiatives",
        "Coordinated cross-functional teams for content production",
        "Implemented innovative digital media solutions",
        "Managed multimedia projects from concept to delivery"
      ],
      color: "portfolio-teal"
    },
    {
      title: "Treasurer", 
      period: "July 2024 - October 2024",
      type: "Volunteering",
      responsibilities: [
        "Managed financial planning and budget allocation",
        "Oversaw financial operations and reporting",
        "Ensured compliance with financial regulations",
        "Coordinated with team members on resource management"
      ],
      color: "portfolio-coral"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 via-portfolio-dark to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Volunteering</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My journey in leadership roles and volunteer work that shaped my professional growth
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {volunteer.map((exp) => (
            <div 
              key={exp.title}
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/30 transition-all duration-300 hover:border-slate-600/50"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className={`
                    text-lg font-medium
                    ${exp.color === 'portfolio-teal' ? 'text-portfolio-teal' : 'text-portfolio-coral'}
                  `}>
                    {exp.period}
                  </span>
                  <span className="hidden sm:block text-slate-500">•</span>
                  <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-lg inline-block w-fit">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <span className={`
                        inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0
                        ${exp.color === 'portfolio-teal' ? 'bg-portfolio-teal' : 'bg-portfolio-coral'}
                      `} />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-slate-700/30">
            <h3 className="text-2xl font-bold text-white mb-6">Leadership Philosophy</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Through my volunteer leadership roles, I've learned that effective leadership is about 
              empowering others, fostering collaboration, and driving innovation. These volunteer 
              have strengthened my ability to work in teams, manage resources effectively, and 
              deliver results under pressure - skills that translate directly to my technical work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
