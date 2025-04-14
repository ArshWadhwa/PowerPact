
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Activity, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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

  const features = [
    // {
    //   icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />,
    //   title: "C&I Consumer Focus",
    //   description: "Facilitating connections between commercial & industrial consumers and reliable energy solutions that meet evolving power needs."
    // },
    // {
    //   icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
    //   title: "Land Acquisition Support",
    //   description: "Assisting in identifying and acquiring suitable land for project development, with attention to compliance and location feasibility."
    // },
    // {
    //   icon: <Activity className="h-6 w-6 md:h-8 md:w-8" />,
    //   title: "Procurement Coordination",
    //   description: "Providing access to essential resources and vendor networks to support smooth and timely project setup."
    // },
    // {
    //   icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8" />,
    //   title: "Regulatory Awareness",
    //   description: "Keeping stakeholders informed with relevant updates on policies and reforms that impact project planning and execution."
    // }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding overflow-hidden bg-gray-50">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* About Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-on-scroll">
              <span className="text-gradient">Powering Connections</span> in the Energy Sector
            </h2>
            
            <p className="text-gray-700 mb-4 animate-on-scroll text-sm sm:text-base md:text-lg">
            Power Pact is a hands-on service platform that connects the industry experts from various fields to facilitate power demand & supply, land acquisition, project related procurement services to develop Utility Scale RE projects for IPPs and Captive/Group Captive Projects for C&l customers.
            </p>
            
            {/* <p className="text-gray-700 mb-4 animate-on-scroll text-sm sm:text-base md:text-lg">
              We bring together industry experts, service providers, and stakeholders to create a seamless network that addresses the complex challenges of the modern energy landscape.
            </p> */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-4 sm:p-6 rounded-lg shadow-md card-hover animate-on-scroll`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Illustration/Animation Side */}
          <div className="lg:w-1/2 flex justify-center animate-on-scroll order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative">
              {/* Main circular element - reduced sizes for smaller screens */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float">
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-3xl font-bold">
                      Power
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements - adjusted for better visibility on small screens */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-2 rounded-full shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <Activity className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary/80 text-white p-2 rounded-full shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              
              {/* Connecting lines */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 animate-spin" style={{ animationDuration: "20s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
