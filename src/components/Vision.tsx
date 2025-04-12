
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
      content: "To create a seamlessly interconnected energy ecosystem where demand meets supply efficiently, powered by expertise and innovation."
    },
    {
      id: "mission",
      icon: <Flag className="h-6 w-6 sm:h-8 sm:w-8" />,
      iconBg: "bg-secondary",
      title: "Mission",
      content: "To facilitate strategic connections between energy stakeholders, provide expert advisory services, and drive sustainable growth in the energy sector."
    },
    {
      id: "purpose",
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      iconBg: "bg-accent",
      title: "Purpose",
      content: "To contribute to a more efficient, sustainable, and innovative energy landscape that benefits all stakeholders and supports long-term industry growth."
    }
  ];

  const timelineItems = [
    {
      title: "Industry Expertise",
      content: "Our team brings decades of experience in the energy sector, with deep knowledge of market dynamics, regulatory frameworks, and industry trends."
    },
    {
      title: "Strategic Partnerships",
      content: "We have cultivated strong relationships with key stakeholders across the energy value chain, creating a robust network that benefits our clients."
    },
    {
      title: "Innovative Solutions",
      content: "Our approach combines traditional industry knowledge with cutting-edge methodologies to address complex challenges in innovative ways."
    },
    {
      title: "Client Success",
      content: "We measure our success by the achievements of our clients, focusing on delivering tangible results and long-term value."
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
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div 
                      className={`absolute -left-3 sm:-left-4 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                        index === 0 ? "bg-primary" : 
                        index === 1 ? "bg-secondary" : 
                        index === 2 ? "bg-accent" : "bg-primary"
                      } animate-ripple`} 
                      style={{ animationDelay: `${index * 0.5}s` }}
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
