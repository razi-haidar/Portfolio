
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { Loader2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleLoad = () => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Explore my work and get in touch if you'd like to collaborate.",
      });
    };
    
    // Simulate loading (would actually be loading assets, data, etc.)
    const timeout = setTimeout(() => {
      handleLoad();
    }, 1500);
    
    return () => clearTimeout(timeout);
  }, [toast]);
  
  return (
    <ThemeProvider defaultTheme="light">
      <PortfolioContent />
    </ThemeProvider>
  );
};

const PortfolioContent = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading assets and data
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Loading Portfolio</h2>
          <p className="text-muted-foreground mt-2">Please wait while we prepare the experience</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={theme}>
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
