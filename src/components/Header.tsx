
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed bg-gray-900/95 top-0 left-0 w-full z-50 transition-all duration-300 py-2 px-2 xs:px-3 sm:py-3 sm:px-4 md:px-8 lg:px-16",
        isScrolled ? "bg-gray-800/95 backdrop-blur-sm shadow-md" : "bg-gray-900/90 backdrop-blur-sm"
      )}
    >


     <div className="flex items-center justify-between max-w-10xl mx-auto">
  <div className="flex items-center">
    {/* Logo container with fully rounded shape and increased size */}
    <div className="h-[100px] lg:h-[120px] drop-shadow-md bg-transparent rounded-full p-2 flex items-center justify-center">
      <img 
        src="/logo/b3b956da-7b11-489c-83ff-67c384ac9d7a_2-removebg-preview.png" 
        alt="PowerPact Logo" 
        className="h-[125px] lg:h-[195px] w-auto object-contain filter drop-shadow-lg"
        style={{
          filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
        }}
      />
    </div>
  </div>

        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {["about", "services", "vision", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-100 hover:text-white transition-colors capitalize px-1 py-2 font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-secondary text-white btn-hover"
          >
            Get in Touch
          </Button>
        </div>
        
        {/* Mobile Menu Button - Increased tap area */}
        <button 
          className="md:hidden text-foreground p-1 xs:p-2 min-w-[44px] min-h-[44px] text-gray-100 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-3 xs:py-4 px-3 xs:px-4 animate-fadeInUp">
          <nav className="flex flex-col space-y-2 xs:space-y-3 max-w-7xl mx-auto">
            {["about", "services", "vision", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors capitalize text-left py-2 border-b border-gray-100 min-h-[44px]"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-secondary text-white w-full mt-1 xs:mt-2 min-h-[44px]"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
