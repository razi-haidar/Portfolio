
import { useState } from 'react';
import AnimatedSection from '@/utils/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Programming & Data Analysis",
    skills: ["Python", "SQL", "R", "MATLAB", "Statistical Analysis", "Data Preprocessing", "Feature Engineering"]
  },
  {
    id: 2,
    name: "Machine Learning & AI",
    skills: ["TensorFlow", "Scikit-learn", "Neural Networks", "Computer Vision", "NLP", "Regression Models", "Classification Algorithms"]
  },
  {
    id: 3,
    name: "Big Data Technologies",
    skills: ["Apache Spark", "Hadoop", "Data Warehousing", "ETL Pipelines", "Database Design", "NoSQL", "Data Lakes"]
  },
  {
    id: 4,
    name: "Data Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Dashboard Design", "Interactive Visualizations", "Data Storytelling"]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle mx-auto">
              My technical expertise and proficiencies in data analytics and AI.
            </p>
          </AnimatedSection>
        </div>
        
        <div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <AnimatedSection key={category.id} className="col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {category.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="bg-card shadow-sm border rounded-lg p-4 flex items-center card-hover"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
          </div>
          
          <AnimatedSection delay={300} className="mt-16">
            <div className="bg-card border rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Achievement</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="bg-primary/10 p-6 rounded-full">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-center text-sm mt-2">Students Mentored</div>
                </div>
                <div className="bg-primary/10 p-6 rounded-full">
                  <div className="text-4xl font-bold text-primary">95%</div>
                  <div className="text-center text-sm mt-2">Satisfaction Score</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
