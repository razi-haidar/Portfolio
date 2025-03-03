
import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'scale-in' | 'slide-in';
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fade-in',
  once = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            sectionElement.classList.add(`animate-${animation}`);
            sectionElement.style.opacity = '1';
          }, delay);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          sectionElement.classList.remove(`animate-${animation}`);
          sectionElement.style.opacity = '0';
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(sectionElement);
    
    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, [delay, animation, once]);
  
  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
