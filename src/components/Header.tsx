
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-2 px-2 xs:px-3 sm:py-3 sm:px-4 md:px-8 lg:px-16",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          {/* Logo container with optimized size and curved edges */}
          <div className="h-10 xs:h-11 sm:h-12 md:h-13 bg-white/90 backdrop-blur-md rounded-xl p-1.5 flex items-center justify-center">
            <img 
              src="/lovable-uploads/66052c55-1ccf-4329-9fb7-5441b5b289a3.png" 
              alt="PowerPact Logo" 
              className="h-full w-auto object-contain max-h-[34px] xs:max-h-[38px] sm:max-h-[42px] md:max-h-[46px] rounded-md"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {["about", "services", "vision", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-primary transition-colors capitalize px-1 py-2"
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
          className="md:hidden text-foreground p-1 xs:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
