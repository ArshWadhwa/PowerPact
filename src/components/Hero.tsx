
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || isMobile) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const backgrounds = heroRef.current.querySelectorAll('.parallax-bg');
      backgrounds.forEach((bg, index) => {
        const speed = (index + 1) * 0.2;
        (bg as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });

      // Move energy nodes based on cursor
      const nodes = heroRef.current.querySelectorAll('.power-node');
      nodes.forEach((node, index) => {
        const nodeSpeed = (index + 1) * 0.05;
        (node as HTMLElement).style.transform = `translate(${moveX * nodeSpeed}px, ${moveY * nodeSpeed}px)`;
      });
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  // Generate random power nodes and connection lines
  const generatePowerNodes = () => {
    const nodes = [];
    const lines = [];
    const nodeCount = isMobile ? 6 : 12;
    const lineCount = isMobile ? 4 : 8;
    
    for (let i = 0; i < nodeCount; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      
      nodes.push(
        <div 
          key={`node-${i}`}
          className="power-node" 
          style={{ 
            top: `${top}%`, 
            left: `${left}%`,
            animationDelay: `${delay}s` 
          }}
        />
      );
      
      if (i < lineCount) {
        const startTop = Math.random() * 100;
        const startLeft = Math.random() * 40;
        const width = 50 + Math.random() * (isMobile ? 50 : 100);
        const angle = -15 + Math.random() * 30;
        const lineDelay = Math.random() * 3;
        
        lines.push(
          <div 
            key={`line-${i}`}
            className="connector-line" 
            style={{ 
              top: `${startTop}%`, 
              left: `${startLeft}%`,
              width: `${width}px`,
              height: '1px',
              transform: `rotate(${angle}deg)`,
              animationDelay: `${lineDelay}s`
            }}
          />
        );
      }
    }
    
    return [...nodes, ...lines];
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Energy Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-50"></div>
      <div className="energy-grid-bg"></div>
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Dynamic Energy Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {generatePowerNodes()}
      </div>
      
      {/* Background Elements */}
      <div className="parallax-bg opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -right-20 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto text-primary">
          <path fill="currentColor" d="M42.2,-52.1C55.4,-48.1,67.2,-37.2,71.6,-24.1C76,-11,73,-4.1,67.4,1.4C61.8,6.9,53.6,11.1,46.6,16.9C39.7,22.7,34,30.3,28.1,44.4C22.2,58.5,16,79.2,4.9,82.8C-6.2,86.4,-22.3,72.9,-32.8,60.2C-43.2,47.4,-48.1,35.3,-50.2,23.8C-52.3,12.3,-51.8,1.3,-52.4,-12.8C-53,-26.9,-54.8,-44.1,-48.3,-49.8C-41.8,-55.6,-26.9,-49.9,-13.7,-52.7C-0.5,-55.5,10.9,-66.7,22.6,-66.3C34.3,-65.9,46.3,-54,52.2,-41.9C58,-29.7,57.7,-17.5,59.3,-5.4C60.8,6.7,64.3,18.8,64.1,31.3C63.9,43.8,60,56.7,48.8,57.7C37.7,58.6,19.3,47.5,4.9,41.5C-9.5,35.6,-19,34.8,-31.3,34.1C-43.5,33.4,-58.5,32.9,-61.1,25.8C-63.6,18.8,-53.8,5.2,-44.5,-2.5C-35.2,-10.1,-26.5,-11.6,-23.3,-23.7C-20.1,-35.8,-22.3,-58.4,-16.4,-66C-10.4,-73.6,3.8,-66.3,14.7,-59.5C25.7,-52.7,33.4,-46.3,42.2,-52.1Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-[40%] left-[5%] w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto text-accent">
          <path fill="currentColor" d="M42.8,-55.3C55.9,-51.1,67.3,-39.9,73.2,-26.1C79.1,-12.3,79.5,4.2,74.9,19.3C70.3,34.5,60.7,48.3,47.7,58.5C34.7,68.7,18.3,75.3,1,75.1C-16.3,74.9,-32.6,67.9,-42.6,56.3C-52.5,44.8,-56.1,28.6,-60.6,12.1C-65.2,-4.5,-70.7,-21.3,-67.4,-36.8C-64.1,-52.3,-52,-66.5,-37.6,-70C-23.2,-73.4,-6.5,-66.1,7.9,-61.2C22.3,-56.4,39.7,-54,53.7,-47.3C67.8,-40.7,78.6,-29.7,79.2,-18.2C79.9,-6.6,70.4,5.6,63.5,17.8C56.6,30,52.4,42.3,43.4,51.3C34.5,60.3,20.7,66.1,6.3,68.4C-8,70.8,-22.1,69.7,-30.8,61.9C-39.6,54.1,-43,39.6,-50.8,28.3C-58.5,17,-70.5,8.5,-74.3,-1.9C-78.1,-12.3,-73.7,-24.7,-67.3,-36.8C-61,-48.9,-52.6,-60.9,-40.9,-68C-29.2,-75,-14.6,-77.2,-0.3,-76.7C14,-76.3,28,-73.2,38.8,-65.5C49.7,-57.8,57.4,-45.4,60.9,-33.1C64.4,-20.8,63.7,-8.5,58.8,0.3C54,9,45.1,18,36.3,24.6C27.5,31.3,18.8,35.6,9.3,39.1C-0.3,42.7,-10.6,45.3,-18.9,42.3C-27.1,39.2,-33.3,30.3,-38.6,21.4C-43.9,12.5,-48.3,3.5,-49.2,-6.4C-50.1,-16.3,-47.5,-27.1,-42.2,-37.3C-36.8,-47.5,-28.7,-57.1,-18.5,-59.8C-8.3,-62.4,3.9,-58.1,16.8,-57.6C29.7,-57.2,43.4,-60.5,56.5,-56.5C69.6,-52.5,82.1,-41.1,86.5,-27.7C90.9,-14.2,87.2,1.3,83.8,17.6C80.4,33.9,77.3,50.9,66.8,61.6C56.3,72.3,38.5,76.6,22.3,77.7C6.1,78.7,-8.4,76.4,-18.9,68.3C-29.4,60.3,-36,46.4,-44.5,35.2C-53,24,-63.5,15.4,-68.5,4.1C-73.5,-7.2,-73,-21.2,-67.3,-32.9C-61.6,-44.6,-50.7,-54.1,-38.4,-58.5C-26.1,-62.9,-12.4,-62.2,1.2,-63.8C14.7,-65.4,29.4,-69.2,41.7,-66.1C54,-63,63.9,-52.9,71.4,-40.3C78.9,-27.7,84,-12.3,84.8,3.6C85.7,19.6,82.2,36.1,72.8,47.9C63.3,59.8,47.8,67,32.6,70.4C17.3,73.8,2.2,73.3,-12.3,70.9C-26.9,68.5,-40.9,64.2,-51.9,55.4C-62.9,46.6,-70.8,33.3,-69.3,20.7C-67.7,8.1,-56.6,-3.8,-49.8,-16.1C-42.9,-28.4,-40.2,-41.1,-32.8,-51.8C-25.3,-62.4,-13.2,-71,1.5,-73C16.2,-75,32.3,-70.3,45.2,-61.5C58.1,-52.6,67.6,-39.6,76.5,-25.1C85.3,-10.5,93.5,5.6,94.1,22.2C94.7,38.8,87.8,55.8,75.4,66.8C63,77.7,45.2,82.5,28.7,82.5C12.2,82.5,-3,77.7,-17,72.1C-31,66.5,-43.9,60.2,-52.4,49.6C-60.9,39.1,-65.1,24.5,-69.5,9.6C-73.9,-5.4,-78.5,-20.7,-73.8,-32.5C-69.1,-44.3,-55.1,-52.7,-41.6,-56.1C-28.1,-59.5,-15.1,-58,0.2,-58.3C15.5,-58.6,33.1,-60.8,45.2,-54.9C57.3,-49,63.9,-35,68.5,-20.7C73.1,-6.4,75.7,8.3,72.5,21.4C69.4,34.5,60.5,46,49.2,53.7C37.9,61.5,24.1,65.3,10.6,67.4C-2.9,69.4,-16.2,69.7,-27.1,65.1C-38,60.5,-46.6,51.1,-53.3,40.6C-60.1,30.1,-65.1,18.5,-67.9,5.9C-70.7,-6.8,-71.3,-20.4,-67.3,-33.9C-63.3,-47.3,-54.8,-60.5,-42.8,-67.9C-30.9,-75.3,-15.4,-76.8,-1.1,-75.3C13.2,-73.8,26.5,-69.3,37.9,-62C49.3,-54.7,58.9,-44.7,62.8,-32.8C66.8,-20.9,65.2,-7.1,63,-1" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Hero Content - Improved responsive layout and sizing */}
      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4 animate-fadeInUp">
            <Zap className="text-secondary h-5 w-5 xs:h-6 xs:w-6" />
            <span className="text-sm xs:text-base font-medium text-secondary">PowerPact</span>
          </div>
          
          {/* Improved heading with better responsive font sizing */}
          <h1 className="text-[1.5rem] xs:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 max-w-[95%] mx-auto md:max-w-full">
            <span className="energy-gradient inline-block animate-fadeInUp">The Junction for</span>
            <br />
            <div className="animation-delay-200 overflow-hidden max-w-full">
              <span className="animate-typewriter inline-block whitespace-normal xs:whitespace-nowrap">Energy Demand & Supply</span>
            </div>
          </h1>
          
          {/* Better spacing and font sizing for paragraph */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-[95%] xs:max-w-[90%] sm:max-w-2xl mb-6 sm:mb-8 text-gray-700 animation-delay-400 animate-fadeInUp">
          We are the Pioneers in serving your interests in the most advanced way ever. Making the platform a one stop destination for all your Project Development needs.
          </p>
          
          {/* Improved button layout for small screens */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 animation-delay-600 animate-fadeInUp w-full xs:w-auto">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-primary text-white btn-hover px-4 py-2 xs:px-5 xs:py-3 sm:px-6 sm:py-4 text-sm xs:text-base sm:text-lg group w-full xs:w-auto min-h-[44px]"
            >
              Get Started
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10 btn-hover px-4 py-2 xs:px-5 xs:py-3 sm:px-6 sm:py-4 text-sm xs:text-base sm:text-lg w-full xs:w-auto min-h-[44px]"
            >
              Learn More
            </Button>
          </div>

          {/* Better spacing and responsive layout for feature icons */}
          <div className="mt-8 xs:mt-10 sm:mt-12 flex flex-col xs:flex-row gap-4 xs:gap-6 sm:gap-8 flex-wrap justify-center animation-delay-800 animate-fadeInUp">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="text-primary h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="text-sm xs:text-base font-medium">Fast Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <BarChart3 className="text-secondary h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="text-sm xs:text-base font-medium">Measurable Results</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Better positioning for all screen sizes */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 left-0 right-0 flex justify-center animate-float">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors min-h-[44px] min-w-[44px]"
          aria-label="Scroll to About section"
        >
          <span className="text-xs xs:text-sm mb-1 xs:mb-2">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 xs:h-5 xs:w-5 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
