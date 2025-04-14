
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  BookOpen, 
  Building2, 
  ChevronDown,
  ChevronUp,
  FileText, 
  LightbulbIcon, 
  Network, 
  Shuffle, 
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [openService, setOpenService] = useState<number | null>(null);
  
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

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  const services = [
    {
      icon: <Network />,
      title: "C&l Consumer Acquisition",
      description: "Identifying and onboarding Commercial & Industrial clients for energy solutions or services.."
    },
    {
      icon: <LightbulbIcon />,
      title: "Land Acquisition for Utility and C&l Projects",
      description: "Securing land for infrastructure development in utility-scale and C&I energy projects."
    },
    // {
    //   icon: <BarChart3 />,
    //   title: "",
    //   description: "In-depth analysis of energy market trends, demand patterns, and supply dynamics."
    // },
    {
      icon: <Building2 />,
      title: "Resource Procurement for Project Setup",
      description: "Sourcing essential materials and services required for initiating and executing projects."
    },
    {
      icon: <Shuffle />,
      title: "Power Supplier Allocation",
      description: "Assigning appropriate energy providers to meet project-specific or client-based power needs."
    },
    {
      icon: <FileText />,
      title: "Regular updates on Regulatory reforms in the Industry",
      description: "Monitoring and sharing the latest changes in energy sector regulations and policies."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Our <span className="text-gradient">Comprehensive</span> Services
          </h2>
          <p className="text-gray-700 animate-on-scroll text-base sm:text-lg">
            We offer a wide range of specialized services designed to address the unique challenges and opportunities in the energy sector.
          </p>
        </div>
        
        {isMobile ? (
          // Mobile accordion view
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <Collapsible 
                key={index}
                open={openService === index}
                onOpenChange={() => toggleService(index)}
                className="animate-on-scroll bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full min-h-[44px] text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 inline-block rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <div>
                    {openService === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 pl-12">
                  <p className="text-gray-600">{service.description}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll relative overflow-hidden group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="text-primary mb-4 relative z-10">
                  <div className="p-3 bg-primary/10 inline-block rounded-lg">{service.icon}</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
                
                <p className="text-gray-600 mb-4 relative z-10">{service.description}</p>
                
                <div className="h-1 w-12 bg-secondary rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 md:mt-16 text-center animate-on-scroll">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white btn-hover px-6 py-3 md:px-8 md:py-6 text-base md:text-lg min-h-[44px]"
          >
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
