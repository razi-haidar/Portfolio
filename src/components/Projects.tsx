
import { useState } from 'react';
import AnimatedSection from '@/utils/AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  points: string[];
  tools: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Data-Driven Sales Performance Analysis",
    description: "A comprehensive sales data analysis project with interactive dashboards and pricing strategy optimization.",
    points: [
      "Conducted sales data analysis using statistical techniques, identifying trends and optimizing pricing strategies.",
      "Created interactive dashboards in Power BI, boosting decision-making efficiency by 20%."
    ],
    tools: ["Python", "Power BI", "Statistical Analysis", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
  },
  {
    id: 2,
    title: "Vision-Based User Interface",
    description: "A VB-MKC system using computer vision for real-time hand tracking and gesture recognition.",
    points: [
      "Developed a VB-MKC system using Python and OpenCV for real-time hand tracking and gesture recognition.",
      "Implemented user-centric features like click and keystroke recognition based on user gestures, improving system accessibility.",
      "Conducted system accuracy testing and user experience evaluation for iterative improvements and enhancements."
    ],
    tools: ["Python", "OpenCV", "Computer Vision", "Gesture Recognition"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    github: "https://github.com/razi-haidar"
  },
  {
    id: 3,
    title: "Secure Facial Biometrics Attendance System",
    description: "A real-time facial recognition system for secure attendance tracking with data encryption.",
    points: [
      "Designed and implemented a real-time facial biometrics attendance system using Python and OpenCV.",
      "Integrated features like user authentication, secure data storage, and attendance reporting into the system.",
      "Ensured system security through the implementation of stringent access controls and data encryption."
    ],
    tools: ["Python", "OpenCV", "Facial Recognition", "Data Encryption"],
    image: "https://images.unsplash.com/photo-1560265036-021b3652b490?q=80&w=1000",
    github: "https://github.com/razi-haidar",
    demo: "#"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto">
              A showcase of my data analysis and machine learning projects.
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              delay={index * 200}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-full flex flex-col rounded-lg overflow-hidden border shadow-sm bg-card transition-all duration-300 hover:shadow-md">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mt-1 mb-4 flex-grow">
                    <div className="space-y-2">
                      {project.points.map((point, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <p className="text-muted-foreground">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className="skill-badge"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors flex items-center text-sm"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors flex items-center text-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
