import { GraduationCap, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-white mb-6">
            About Me
          </h4>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about technology, innovation, and creating solutions that make a difference
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
                Hi, I'm Sanskar Jain
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                An aspiring Software Developer with a passion for creating innovative solutions 
                that bridge technology and real-world problems. I believe in the power of code 
                to transform ideas into impactful applications.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                My journey in technology spans across various domains - from building scalable 
                web applications to developing IoT solutions for healthcare. I'm constantly 
                learning and exploring new technologies to stay at the forefront of innovation.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-portfolio-dark-gray/50 p-6 rounded-xl border border-portfolio-teal/20 hover:border-portfolio-teal/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-portfolio-teal mr-3" size={24} />
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-portfolio-teal font-medium">Master of Computer Applications (MCA)</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Amity University • 2024 - 2026</p>
                </div>
                <div>
                  <h4 className="text-portfolio-coral font-medium">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-portfolio-dark-gray/50 p-6 rounded-xl border border-portfolio-coral/20 hover:border-portfolio-coral/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-portfolio-coral mr-3" size={24} />
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white">Languages</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-portfolio-teal font-medium">English</div>
                  <div className="text-gray-400 text-sm">Fluent</div>
                </div>
                <div className="text-center">
                  <div className="text-portfolio-coral font-medium">Hindi</div>
                  <div className="text-gray-400 text-sm">Fluent</div>
                </div>
                <div className="text-center">
                  <div className="text-portfolio-yellow font-medium">German</div>
                  <div className="text-gray-400 text-sm">Basic</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content (Image/Visual and Interests) */}
          {/* This div now contains BOTH the Summary Box and the Interests Section */}
          <div className="animate-slide-in-right">
            {/* Summary Box */}
            {/* w-full added to relative div to ensure it takes full width for centering. */}
            {/* mx-auto centers it when flex item width allows. */}
            <div className="relative "> 
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/20 to-portfolio-coral/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-portfolio-dark-gray/30 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-7 mt-5 relative">
                      <img
                        src="/sanskar.png"
                        alt="Sanskar Jain"
                        className="w-full h-full rounded-full object-cover border-4 border-portfolio-teal/50"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-2">Sanskar Jain</h3>
                    <p className="text-portfolio-teal font-medium">Software Developer</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm sm:text-base">Focus Areas:</span>
                      <span className="text-white text-sm sm:text-base">Full Stack Development</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm sm:text-base">Specialization:</span>
                      <span className="text-white text-sm sm:text-base">Java & Spring Boot</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm sm:text-base">Interest:</span>
                      <span className="text-white text-sm sm:text-base">IoT & Healthcare Tech</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm sm:text-base">Status:</span>
                      <span className="text-portfolio-teal text-sm sm:text-base">Available for Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests Section - Now correctly placed BELOW the summary box with spacing */}
            <div className="bg-portfolio-dark-gray/50 p-6 rounded-xl border border-portfolio-yellow/20 hover:border-portfolio-yellow/40 transition-all duration-300 mt-5"> {/* Added mt-6/lg:mt-8 and w-full max-w-md mx-auto */}
              <div className="flex items-center mb-4">
                <Heart className="text-portfolio-yellow mr-3" size={24} />
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white">Interests & Passion</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java Development', 'Data Structures & Algorithms', 'Spring Boot', 

                  'IoT Solutions', 'Web Development', 'Machine Learning', 
                  'Healthcare Technology', 'Open Source'
                ].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-portfolio-teal/20 to-portfolio-coral/20 text-gray-300 rounded-full text-sm border border-portfolio-teal/30 hover:border-portfolio-teal/60 transition-all duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
          </div> {/* End of Right Column Content */}
            
        </div> {/* End of Main Grid Layout */}
      </div>
    </div>
  );
};

export default About;