
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  once = true
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            textElement.classList.add('animate-fade-in');
            textElement.style.opacity = '1';
          }, delay);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          textElement.classList.remove('animate-fade-in');
          textElement.style.opacity = '0';
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(textElement);
    
    return () => {
      if (textElement) observer.unobserve(textElement);
    };
  }, [delay, once]);
  
  return (
    <span 
      ref={textRef} 
      className={className}
      style={{ opacity: 0 }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
