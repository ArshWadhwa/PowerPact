
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Power<span className="text-secondary">Pact</span></h3>
            <p className="text-gray-400 mb-4">
              The junction for energy demand and supply, connecting industry experts and providing essential services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-secondary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Services</a>
              </li>
              <li>
                <a href="#vision" className="text-gray-400 hover:text-secondary transition-colors">Vision & Mission</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Network Building</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Strategic Advisory</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Market Analysis</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Project Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Regulatory Compliance</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Innovation Integration</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and insights from the energy sector.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PowerPact. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and developed for the energy industry experts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
