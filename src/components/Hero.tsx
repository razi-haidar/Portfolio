
import { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from '@/utils/AnimatedText';
import AnimatedSection from '@/utils/AnimatedSection';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <AnimatedSection animation="fade-in" delay={300} className="mb-3">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Data Analytics & AI Engineer
              </span>
            </AnimatedSection>
            
            <div className="mb-6">
              <AnimatedText 
                text="Transforming Data"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight block"
                delay={600}
              />
              <AnimatedText 
                text="Into Insights"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient block mt-2"
                delay={900}
              />
            </div>
            
            <AnimatedSection animation="fade-in" delay={1200} className="mb-8">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Data Analyst skilled in Python, SQL, and data visualization tools. Experienced in teaching 
                and applying analytics concepts like Machine Learning and Big Data frameworks.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={1500}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="btn-primary"
                >
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="/resume.pdf" 
                  className="btn-secondary"
                  download="Razi_Haidar_Resume.pdf"
                >
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/razi-haidar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/razi-haidar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:razihaidar9342@gmail.com" 
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5 order-first lg:order-last">
            <AnimatedSection animation="scale-in" delay={800} className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse" />
                <img 
                  src="/lovable-uploads/c172e831-adf8-4f22-9ba7-3118e8c669c4.png" 
                  alt="Razi Haidar" 
                  className="rounded-full object-cover w-full h-full p-2"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
