import { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const phrases = [
    "Software Developer",
    "Tech Enthusiast", 
    "Problem Solver",
    "Java Developer"
  ];

  useEffect(() => {
    const currentPhrase = phrases[displayIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayText("Hi, I'm Sanskar Jain – " + currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText("Hi, I'm Sanskar Jain – " + currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setDisplayIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, displayIndex, isDeleting, phrases]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 fade-in visible">
          <div className="space-y-6">
            <p className="text-primary text-lg md:text-xl font-medium">Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Sanskar Jain
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground min-h-[2em] flex items-center justify-center lg:justify-start">
              <span>{displayText.replace("Hi, I'm Sanskar Jain – ", "")}</span>
              <span className="animate-pulse text-primary ml-1">|</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative solutions with Java, Spring Boot, and modern web technologies. Currently pursuing MCA and building impactful projects that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://drive.google.com/file/d/1BOuSAUWKBCCczAOrFcNaJxAj44GyqYoc/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
            <button 
              onClick={scrollToAbout}
              className="btn-outline inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center fade-in visible">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary/20 overflow-hidden bg-gradient-primary p-1">
             <img
  src="/sanskar.png"
  alt="Sanskar Jain"
  className="w-full h-full object-cover rounded-full"
/>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <button 
          onClick={scrollToAbout} 
          className="text-primary hover:text-primary/80 transition-colors p-2 rounded-full hover:bg-primary/10"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;