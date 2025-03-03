
import { useState } from 'react';
import AnimatedSection from '@/utils/AnimatedSection';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Analyst",
    company: "Special Technology Baby Kiran Memorial",
    location: "Saharsa",
    period: "Dec 2023 - Dec 2024",
    description: [
      "Taught data analytics tools such as Python, Apache Spark, and Power BI, designing industry-aligned curriculum with hands-on projects.",
      "Designed industry-relevant curriculum with practical projects and case studies.",
      "Mentored students in analytics and big data frameworks, ensuring high success rates."
    ]
  },
  {
    id: 2,
    title: "Artificial Intelligence Intern",
    company: "MathWork",
    location: "Remote",
    period: "May 2023 - Sep 2023",
    description: [
      "Designed and implemented machine learning models using TensorFlow to enhance engineering simulations, with a 10% improvement in accuracy.",
      "Applied advanced statistical and analytical skills to handle large datasets, identifying critical patterns and trends.",
      "Acquired advanced skills in Python, various machine learning libraries, and MATLAB/Simulink."
    ]
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Aican Automate",
    location: "Remote",
    period: "Sep 2022 - Nov 2022",
    description: [
      "Performed comprehensive data analysis using Python libraries, extracting valuable insights from complex datasets.",
      "Converted raw data into user-friendly visual representations using Matplotlib, Seaborn, and Tableau.",
      "Used data analysis techniques to identify trends, diagnose issues, and propose data-driven solutions to business problems."
    ]
  }
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  
  return (
    <section id="experience" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle mx-auto">
              My journey through different roles in data analytics, AI, and teaching.
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline tabs on mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    activeExperience === exp.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Vertical timeline for desktop */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="space-y-1">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeExperience === exp.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-secondary text-foreground"
                  }`}
                >
                  <div className="font-medium">{exp.title}</div>
                  <div className={activeExperience === exp.id ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {exp.company}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <AnimatedSection key={activeExperience}>
              {experiences
                .filter((exp) => exp.id === activeExperience)
                .map((exp) => (
                  <div key={exp.id} className="bg-card rounded-lg shadow-sm p-6 border">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-xl text-primary mb-4">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-primary mr-3 mt-1.5">•</span>
                            <p className="text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
