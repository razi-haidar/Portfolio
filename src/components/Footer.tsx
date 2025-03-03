
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Razi Haidar. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-muted-foreground text-sm mb-4 sm:mb-0 sm:mr-8">
              Data Analyst & AI Engineer
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
