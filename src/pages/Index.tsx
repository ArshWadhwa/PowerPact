
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Vision from '../components/Vision';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';

const Index = () => {
  useEffect(() => {
    // Update the title
    document.title = "PowerPact - The Junction for Energy Demand & Supply";
    
    // Add viewport meta tag to ensure proper mobile rendering
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ScrollAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
