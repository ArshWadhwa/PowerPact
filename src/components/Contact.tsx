import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            Have questions or ready to explore how Power Pact can support your energy needs? 
            Reach out to our team today.
          </p>
        </div>

        {/* Centered contact cards only */}
        <div className="flex justify-center">
          <div className="w-full max-w-md space-y-6 sm:space-y-8">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <a href="mailto:info@powerpact.com" className="text-gray-600 text-xl hover:text-primary transition-colors block min-h-[44px] font-semibold mb-2 flex items-center">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="max-w-full overflow-hidden">
                  <a href="https://docs.google.com/forms/d/1XN1kzlwXXFfzfsMsuhzpxJUs-m8KuOyLmX6rdnYv584/edit?usp=drivesdk" 
                    className="text-gray-600 hover:text-primary transition-colors block min-h-[44px] font-semibold mb-2  text-xl break-words max-w-full"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
  <div className="flex items-start gap-4">
    <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
      <MapPin className="h-6 w-6" />
    </div>
    <div className="w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry Surveys</h3>
      <div className="space-y-3">
        <a 
          href="https://docs.google.com/forms/d/1nRgwifUepiIgIBebD1DcydfQ_0z-v9-Kr4Pt1qZdpgg/edit?usp=drivesdk" 
          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 group"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h4 className="font-medium text-gray-700 group-hover:text-primary">Energy Services Firm</h4>
          <p className="text-sm text-gray-500 mt-1">Share your experience in service provision</p>
        </a>
        
        <a 
          href="https://docs.google.com/forms/d/1C3t0n2mwRMR4PTInrXfa7B-dADiYOlvsTHmAMebbzQI/edit?usp=drivesdk" 
          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 group"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h4 className="font-medium text-gray-700 group-hover:text-primary">Power Generators & Developers</h4>
          <p className="text-sm text-gray-500 mt-1">Provide insights on project development</p>
        </a>
        
        <a 
          href="https://docs.google.com/forms/d/1a5S87RGMALgOtGFzOs-nChaFe1bYga9KnGUw6H3ZSPo/edit?usp=drivesdk" 
          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 group"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h4 className="font-medium text-gray-700 group-hover:text-primary">Power Offtakers</h4>
          <p className="text-sm text-gray-500 mt-1">Share your energy procurement needs</p>
        </a>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;