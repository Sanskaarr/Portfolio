import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className="contact-floating"
      aria-label="Contact Me"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingContactButton;