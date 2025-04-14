import React, { useEffect, useRef, useState } from 'react';
import { Target, Flag, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Vision = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [openItem, setOpenItem] = useState<string | null>("vision");
  
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const elements = section.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
          element.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const visionItems = [
    {
      id: "vision",
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      iconBg: "bg-primary",
      title: "Vision",
      content: "Our vision drives us to transform the industry practices in a way that cuts short the project development duration helping the developers setup projects much faster and Business much quicker."
    },
    {
      id: "mission",
      icon: <Flag className="h-6 w-6 sm:h-8 sm:w-8" />,
      iconBg: "bg-secondary",
      title: "Mission",
      content: "To become the most trusted & reliable energy solutions platform that empowers communities and businesses with quick and sorted access to information and services on demand."
    },
    {
      id: "purpose",
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      iconBg: "bg-accent",
      title: "Purpose",
      content: "Our purpose falls within the core of the industry we thrive in, strengthening and extending the longevity and profitability of the industry which affects us both directly and indirectly."
    }
  ];

  const timelineItems = [
    {
      title: " Industry Knowledge",
      content: "We bring together professionals with hands-on experience in power demand, supply, and project facilitation, giving you access to practical insights and reliable support throughout your project journey."
    },
    {
      title: "Collaborative Network",
      content: "Power Pact works closely with a trusted network of stakeholders—ranging from land providers to power suppliers—to make the development process smoother and better connected for all involved."
    },
    {
      title: "Practical Solutions",
      content: "From acquiring land to allocating power suppliers, our platform simplifies each step with focused services, helping you manage your project requirements more efficiently."
    },
    {
      title: "Client-Centric Approach",
      content: "We aim to support developers and businesses by offering relevant services and timely updates that contribute to faster project execution and informed decision-making."
    }
  ];

  return (
    <section id="vision" ref={sectionRef} className="section-padding bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left side with vision/mission */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 animate-on-scroll">
              Our Vision, Mission & <span className="text-gradient">Purpose</span>
            </h2>
            
            {/* Mobile accordion view for vision items */}
            <div className="space-y-4">
              {visionItems.map((item) => (
                <Collapsible 
                  key={item.id}
                  open={openItem === item.id}
                  onOpenChange={() => toggleItem(item.id)}
                  className="animate-on-scroll bg-white/50 backdrop-blur-sm rounded-lg shadow-sm transition-all duration-300 overflow-hidden"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 sm:p-4 min-h-[44px] text-left">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.iconBg} text-white rounded-lg flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">{item.title}</h3>
                    </div>
                    <div>
                      {openItem === item.id ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 sm:px-4 pb-3 sm:pb-4 pl-12 sm:pl-16">
                    <p className="text-gray-700 text-sm sm:text-base">
                      {item.content}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
          



          {/* Right side with timeline */}
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
  <div className="relative pl-6 sm:pl-8 animate-on-scroll">
    {/* Vertical timeline line - now positioned to connect with dots */}
    <div 
      className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
      style={{ left: '6px' }} // Adjusted to align with dots
    ></div>
    
    <div className="space-y-6 sm:space-y-8 md:space-y-10"> {/* Reduced space between items */}
      {timelineItems.map((item, index) => (
        <div key={index} className="relative pl-4"> {/* Added pl-4 for better text alignment */}
          {/* Timeline dot - now properly connected to the line */}
          <div 
            className={`absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === 0 ? "bg-primary" : 
              index === 1 ? "bg-secondary" : 
              index === 2 ? "bg-accent" : "bg-primary"
            } animate-ripple`}
            style={{ 
              transform: 'translateX(-50%)', // Centers the dot on the line
              top: '0.4em', // Aligns with first line of text
              animationDelay: `${index * 0.5}s`
            }}
          ></div>
          
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
