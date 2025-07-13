import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const FloatingContactButton = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={scrollToContact}
            className="contact-floating group"
            aria-label="Contact Me"
          >
            <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-popover/95 backdrop-blur-sm">
          <p>Say Hello! 👋</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingContactButton;