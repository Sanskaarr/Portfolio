import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const texts = ['Software Developer', 'Tech Enthusiast', 'Problem Solver', 'Java Developer'];

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);


  const downloadResume = () => {
    // Using the actual uploaded resume PDF
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1BOuSAUWKBCCczAOrFcNaJxAj44GyqYoc/view?usp=share_link';
    link.download = 'SanskarJainResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className="min-h-screen bg-[#0f1117] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2c1d0d] via-[#0f1117] to-[#0f1117]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-portfolio-teal text-xl font-medium">Hi, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Sanskar Jain
                </h1>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-300 min-h-[1.5em]">
                  <span className="inline-block">
                    {currentText}
                    <span 
                      className={`inline-block w-0.5 bg-portfolio-teal ml-1 transition-opacity duration-100 ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ height: '1em', verticalAlign: 'text-top' }}
                    />
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                Passionate about creating innovative solutions with Java, Spring Boot, and modern web technologies. Currently pursuing MCA and building impactful projects that make a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                 <Button onClick={downloadResume}
                className="w-full sm:w-auto bg-gradient-to-r from-portfolio-teal to-portfolio-teal/80 hover:from-portfolio-teal/90 hover:to-portfolio-teal text-white px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 border-0">
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Button>
                   <Button variant="outline" 
                    onClick={() => window.location.href = '/about'}
                className="w-full sm:w-auto border-2 border-portfolio-coral text-portfolio-coral bg-white hover:bg-portfolio-coral hover:text-white px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105">
                Learn More
              </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-portfolio-teal">
                  <img 
                    src="public/Sanskar.png"
                    alt="Sanskar Jain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
