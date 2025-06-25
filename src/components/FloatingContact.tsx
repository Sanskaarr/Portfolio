
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-portfolio-coral hover:bg-portfolio-coral/90 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 group focus:outline-none focus:ring-2 focus:ring-portfolio-coral focus:ring-offset-2 focus:ring-offset-portfolio-dark"
      aria-label="Contact me"
    >
      <MessageCircle size={20} className="sm:w-6 sm:h-6" />
      <span className="absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 bg-portfolio-dark text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Get in touch
      </span>
    </Link>
  );
};

export default FloatingContact;
