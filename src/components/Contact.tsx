
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

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
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full min-h-[44px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full min-h-[44px]"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Organization"
                  className="w-full min-h-[44px]"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-secondary text-white w-full py-5 btn-hover min-h-[44px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-6 sm:space-y-8">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <a href="mailto:info@powerpact.com" className="text-gray-600 hover:text-primary transition-colors block min-h-[44px] flex items-center">info@powerpact.com</a>
                  <a href="mailto:support@powerpact.com" className="text-gray-600 hover:text-primary transition-colors block min-h-[44px] flex items-center">support@powerpact.com</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <a href="tel:+15551234567" className="text-gray-600 hover:text-primary transition-colors block min-h-[44px] flex items-center">+1 (555) 123-4567</a>
                  <a href="tel:+15559876543" className="text-gray-600 hover:text-primary transition-colors block min-h-[44px] flex items-center">+1 (555) 987-6543</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Energy Plaza, Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-primary to-accent text-white rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
