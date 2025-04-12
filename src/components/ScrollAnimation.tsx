
import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Adjust the threshold as needed (0.85 means 85% of the element must be visible)
      return rect.top < windowHeight * 0.85;
    };
    
    // Generic function to handle animations based on scroll position
    const handleScroll = () => {
      // Handle standard fade-in animations
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('is-visible');
        }
      });
      
      // Handle staggered animations
      const staggerContainers = document.querySelectorAll('.stagger-container');
      staggerContainers.forEach((container) => {
        if (isInViewport(container)) {
          const children = container.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, 100 * index); // 100ms delay between each item
          });
        }
      });
      
      // Handle scroll-triggered counters
      const counters = document.querySelectorAll('.counter-animate');
      counters.forEach((counter) => {
        if (isInViewport(counter) && !counter.classList.contains('counted')) {
          counter.classList.add('counted');
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const duration = 2000; // ms
          const step = Math.ceil(target / (duration / 16)); // 16ms is roughly one frame at 60fps
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current > target) current = target;
            (counter as HTMLElement).innerText = current.toString();
            if (current < target) {
              requestAnimationFrame(updateCounter);
            }
          };
          
          updateCounter();
        }
      });
      
      // Handle parallax scroll effects
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset;
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrollPosition * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    // Handle horizontal scroll animations
    const setupHorizontalScrollers = () => {
      const horizontalScrollers = document.querySelectorAll('.horizontal-scroll-container');
      horizontalScrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector('.horizontal-scroll-inner');
        if (!scrollerInner) return;
        
        const handleHorizontalScroll = () => {
          if (!isInViewport(scroller)) return;
          
          const scrollPercentage = 
            (window.pageYOffset - (scroller as HTMLElement).offsetTop) / 
            ((scroller as HTMLElement).offsetHeight - window.innerHeight);
          
          const scrollWidth = 
            (scrollerInner as HTMLElement).scrollWidth - 
            (scroller as HTMLElement).offsetWidth;
          
          const scrollPos = Math.min(Math.max(scrollPercentage, 0), 1) * scrollWidth;
          
          (scrollerInner as HTMLElement).style.transform = `translateX(-${scrollPos}px)`;
        };
        
        window.addEventListener('scroll', handleHorizontalScroll);
      });
    };
    
    // Initial setup
    setupHorizontalScrollers();
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimation;
