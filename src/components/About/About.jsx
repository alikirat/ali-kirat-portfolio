import React from 'react';
import './About.css';

/**
 * About Component
 * Professional summary and background information
 */
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>full-stack developer</strong> with over <strong>3 years of experience</strong> building 
              production-ready web applications using the <strong>MERN stack</strong>. Whether you're a startup 
              launching your MVP or an established business scaling your tech infrastructure, I create solutions 
              that combine technical excellence with real business value.
            </p>
            
            <p>
              My approach focuses on <strong>security, scalability, and user experience</strong>. From designing 
              RESTful APIs and implementing JWT authentication to building responsive React interfaces, I deliver 
              clean, maintainable code that your team can build on for years to come.
            </p>
            
            <p>
              I'm currently exploring <strong>AI and machine learning integration</strong>, building multi-agent 
              systems and working with cutting-edge tools like Google's Agent Development Kit. This keeps my 
              solutions at the forefront of what's possible in modern web development.
            </p>
            
            <p>
              <strong>Available for:</strong> Full-time employment opportunities and select freelance projects. 
              Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">3+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">10+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
