
import { useState } from 'react';
import { Mail, Linkedin, Download, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link to send email to sanskar0808jain@gmail.com
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:sanskar0808jain@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      toast({
        title: "Message prepared!",
        description: "Your email client should open with the message ready to send.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1BOuSAUWKBCCczAOrFcNaJxAj44GyqYoc/view?usp=share_link';
    link.download = 'SanskarJainResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-4 sm:mb-6">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-portfolio-dark-gray/50 p-6 sm:p-8 rounded-2xl border border-white/10 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-6 sm:mb-8">Get In Touch</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-teal/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="text-portfolio-teal w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-medium text-sm sm:text-base">Email</h3>
                     <a
                      href="mailto:sanskar0808jain@gmail.com"
                      className="text-gray-400 hover:text-portfolio-teal transition-colors font-medium"
                    >
                      sanskar0808jain@gmail.com
                    </a>
                     {/* <a
                      href="mailto:sanskar0808jain@gmail.com"
                    <p className="text-gray-400 text-sm sm:text-base break-all">sanskar0808jain@gmail.com</p>
                    </a> */}
                  </div>
                </div>

                {/* <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-coral/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="text-portfolio-coral w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-400 text-sm sm:text-base">+91 7231878863</p>
                  </div>
                </div> */}

                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-yellow/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="text-portfolio-yellow w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">Location</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-portfolio-dark-gray/50 p-6 sm:p-8 rounded-2xl border border-white/10 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white mb-4 sm:mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/jainsanskar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 bg-portfolio-teal/10 border border-portfolio-teal/30 rounded-lg hover:bg-portfolio-teal/20 transition-all duration-300 group"
                >
                  <Linkedin className="text-portfolio-teal w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium text-sm sm:text-base">LinkedIn</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Professional Network</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-portfolio-teal/20 to-portfolio-coral/20 p-6 sm:p-8 rounded-2xl border border-portfolio-teal/30">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white mb-3 sm:mb-4">Download Resume</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Get a detailed overview of my experience, skills, and projects.</p>
              <Button 
                onClick={downloadResume}
                className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white w-full transition-all duration-300 hover:scale-105 h-10 sm:h-12"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download PDF Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-portfolio-dark-gray/50 p-6 sm:p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-6 sm:mb-8">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-portfolio-dark border-gray-600 text-white placeholder:text-gray-400 focus:border-portfolio-teal h-10 sm:h-12 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-portfolio-dark border-gray-600 text-white placeholder:text-gray-400 focus:border-portfolio-teal h-10 sm:h-12 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-portfolio-dark border-gray-600 text-white placeholder:text-gray-400 focus:border-portfolio-teal min-h-24 sm:min-h-32 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-coral hover:bg-portfolio-coral/90 text-white h-10 sm:h-12 text-sm sm:text-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-br from-portfolio-yellow/20 to-portfolio-teal/10 p-4 sm:p-6 rounded-xl border border-portfolio-yellow/30">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white mb-2 sm:mb-3">Quick Response</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to connect with me on LinkedIn for faster communication.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-20 text-center bg-gradient-to-r from-portfolio-teal/10 to-portfolio-coral/10 p-8 sm:p-12 rounded-2xl border border-white/10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-3 sm:mb-4">
            Ready to Start Something Amazing?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Whether it's a new project, collaboration, or just a chat about technology, 
            I'm always excited to connect with like-minded individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;