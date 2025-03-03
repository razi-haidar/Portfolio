
import AnimatedSection from '@/utils/AnimatedSection';
import { BarChart4, Brain, Database, Laptop } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto">
              I'm a data analytics and AI engineer passionate about transforming complex data into
              meaningful insights that drive decisions and innovation.
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection delay={200}>
            <div className="rounded-lg overflow-hidden h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm a data analyst with expertise in Python, SQL, and data visualization tools. My background 
                includes teaching analytical concepts and applying machine learning techniques to solve 
                complex problems.
              </p>
              <p className="text-muted-foreground mb-4">
                Throughout my career, I've worked on projects ranging from sales performance analysis to 
                developing facial biometrics systems. My passion lies in finding patterns in data that others 
                might miss and turning them into actionable strategies.
              </p>
              <p className="text-muted-foreground">
                I'm currently seeking opportunities to contribute to data-driven projects that make a 
                real-world impact, leveraging my skills in analytics, machine learning, and big data frameworks.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card shadow-sm rounded-lg p-6 card-hover border">
                <Database className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Data Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Transforming raw data into insights using Python, SQL, and visualization tools.
                </p>
              </div>
              
              <div className="bg-card shadow-sm rounded-lg p-6 card-hover border">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Machine Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Implementing models that learn from data to make predictions and improve decisions.
                </p>
              </div>
              
              <div className="bg-card shadow-sm rounded-lg p-6 card-hover border">
                <BarChart4 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Data Visualization</h3>
                <p className="text-muted-foreground text-sm">
                  Creating interactive dashboards and visual stories that communicate data effectively.
                </p>
              </div>
              
              <div className="bg-card shadow-sm rounded-lg p-6 card-hover border">
                <Laptop className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Teaching</h3>
                <p className="text-muted-foreground text-sm">
                  Sharing knowledge through curriculum design and mentoring in data analytics.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
