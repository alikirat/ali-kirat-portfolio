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
            <p>I'm a <strong>full-stack software engineer</strong> based in Claremont, CA, building production web applications using <strong>React, TypeScript, Node.js, and MongoDB</strong>. I work with startups and small businesses to ship clean, maintainable software that solves real problems.
          </p>
          <p>
            My background is deliberately non-linear - a decade of teaching, years of 
            consulting, and a transition into engineering through Per Scholas. That path 
            gave me something most engineers don't have: the ability to communicate clearly with non-technical stakeholders and understand why software matters beyond the code.
          </p>
          <p>
            I build with <strong>AI as a core part of the stack</strong> - integrating 
            Anthropic Claude, Groq, and OpenAI APIs into production applications, and 
            contributing to multi-agent systems using Google's Agent Development Kit. 
            I use Claude Code and GitHub Copilot as daily development tools, not experiments.
          </p>
          <p>
            <strong>Available for:</strong> Full-time engineering roles and select freelance projects. Remote preferred, LA area considered.
          </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">2+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">5+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
              <div className="highlight-card">
              <div className="highlight-number">3</div>
              <div className="highlight-label">Languages Spoken</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
