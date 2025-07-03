import { Code, Database, Palette, Globe, Wrench, Terminal } from 'lucide-react';

const Skills = () => {
  const usingNowSkills = [
    { name: 'HTML5', icon: null, color: 'text-orange-500', customIcon: '🌐', bgColor: 'bg-orange-100' },
    { name: 'CSS3', icon: null, color: 'text-blue-500', customIcon: '🎨', bgColor: 'bg-blue-100' },
    { name: 'JAVASCRIPT', icon: null, color: 'text-yellow-500', customIcon: '⚡', bgColor: 'bg-yellow-100' },
    { name: 'JAVA', icon: null, color: 'text-red-600', customIcon: '☕', bgColor: 'bg-red-100' },
    { name: 'SPRING BOOT', icon: Wrench, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'GIT', icon: Terminal, color: 'text-red-500', bgColor: 'bg-red-100' },
    { name: 'SQL', icon: Database, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'BOOTSTRAP', icon: Palette, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'LINUX', icon: Terminal, color: 'text-gray-700', bgColor: 'bg-gray-100' },
    { name: 'PYTHON', icon: Code, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  ];

  const learningSkills = [
    { name: 'NODE.JS', icon: Wrench, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'TYPESCRIPT', icon: Code, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'REST APIs', icon: Globe, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'MONGODB', icon: null, color: 'text-green-500', customIcon: '🍃', bgColor: 'bg-green-100' },
  ];

  const SkillCard = ({ skill, isLarge = true }: { skill: any, isLarge?: boolean }) => {
    const IconComponent = skill.icon;
    const size = isLarge ? 'w-12 h-12' : 'w-10 h-10';
    const textSize = isLarge ? 'text-sm' : 'text-xs';
    
    return (
      <div className="card-skill flex flex-col items-center justify-center text-center min-h-[120px] group">
        <div className={`${size} mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          {IconComponent ? (
            <IconComponent className={`w-full h-full ${skill.color}`} />
          ) : (
            <span className="text-4xl">{skill.customIcon}</span>
          )}
        </div>
        <span className={`font-medium text-foreground ${textSize} leading-tight whitespace-pre-line`}>
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Using Now */}
          <div className="scroll-reveal">
            <div className="mb-8">
              <div className="inline-block border-2 border-foreground px-6 py-2 mb-6">
                <h3 className="text-xl font-bold text-foreground tracking-wider">SKILLS</h3>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-6 tracking-wide">
                USING NOW:
              </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
              {usingNowSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-semibold text-foreground mb-6 tracking-wide">
              LEARNING:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {learningSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
