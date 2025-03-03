
import AnimatedSection from '@/utils/AnimatedSection';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Python",
    issuer: "Hacker Rank",
    date: "Nov 2022",
    link: "https://www.hackerrank.com/certificates/09abe34d0950",
    skills: ["Data Structures", "Algorithms", "OOP", "Python Libraries"]
  },
  {
    id: 2,
    name: "SQL",
    issuer: "ICT Academy",
    date: "Mar 2023",
    link: "#",
    skills: ["Database Design", "Queries", "Joins", "Optimization"]
  },
  {
    id: 3,
    name: "Power BI",
    issuer: "ICT Academy",
    date: "May 2023",
    link: "#",
    skills: ["Data Visualization", "Dashboard Design", "Data Modeling"]
  },
  {
    id: 4,
    name: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "Jun 2023",
    link: "#",
    skills: ["MATLAB", "Data Analysis", "Signal Processing"]
  },
  {
    id: 5,
    name: "Big Data",
    issuer: "ICT Academy",
    date: "Aug 2023",
    link: "#",
    skills: ["Hadoop", "Spark", "Data Processing"]
  },
  {
    id: 6,
    name: "Machine Learning",
    issuer: "ICT Academy",
    date: "Oct 2023",
    link: "#",
    skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"]
  },
  {
    id: 7,
    name: "Data Visualization",
    issuer: "ICT Academy",
    date: "Dec 2023",
    link: "#",
    skills: ["Chart Types", "Visual Design", "Interactive Dashboards"]
  }
];

const Certificates = () => {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedCert(expandedCert === id ? null : id);
  };
  
  return (
    <section id="certificates" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="section-title">Certificates</h2>
            <p className="section-subtitle mx-auto">
              Professional certifications that validate my skills and knowledge.
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <AnimatedSection key={cert.id} delay={index * 100}>
              <div 
                className={`bg-card border rounded-lg shadow-sm overflow-hidden transition-all duration-300 cursor-pointer 
                  ${expandedCert === cert.id ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}
                onClick={() => toggleExpand(cert.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">Issued by {cert.issuer}</p>
                  
                  {expandedCert === cert.id && (
                    <div className="mt-4 space-y-4 animate-fade-in">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="skill-badge"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Certificate
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
                
                <div className={`bg-muted px-6 py-3 text-sm ${expandedCert === cert.id ? 'block' : 'hidden'}`}>
                  <p className="text-muted-foreground text-center">Click to collapse</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
