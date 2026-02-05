import React from 'react';
import { skills } from '../../data/skills';
import './Skills.css';

/**
 * Skills Component
 * Displays technical skills organized by category
 */
const Skills = () => {
  const skillCategories = [
    { key: 'frontend', title: 'Frontend' },
    { key: 'backend', title: 'Backend' },
    { key: 'database', title: 'Database' },
    { key: 'tools', title: 'Tools & Workflow' },
    { key: 'deployment', title: 'Deployment' },
    { key: 'aiml', title: 'AI & ML' }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build modern web applications
        </p>

        <div className="skills-grid">
          {skillCategories.map(({ key, title }) => (
            <div key={key} className="skill-category">
              <h3 className="category-title">{title}</h3>
              <div className="skill-items">
                {skills[key].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
