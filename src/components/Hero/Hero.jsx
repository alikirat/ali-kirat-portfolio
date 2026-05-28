import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import './Hero.css';

/**
 * Hero Component
 * Landing section with name, title, and primary CTAs
 * Features gradient text animation and social links
 */
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-name fade-in">
            Hi, I'm <span className="gradient-text">Ali Kirat</span>
          </h1>
          <h2 className="hero-title fade-in">
            <span className="gradient-text">Full-Stack Software Engineer</span>
          </h2>
          <p className="hero-subtitle fade-in">
            Open to Full-Time Roles & Freelance Projects
          </p>
          <p className="hero-description fade-in">
            Full-stack engineer building production web applications with React, 
            TypeScript, Node.js, and MongoDB. I integrate LLM APIs and AI agent 
            systems as a core part of how I build — not as an afterthought.
          </p>

          {/* Tech Stack Badges */}
          <div className="tech-badges fade-in">
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">TypeScript</span>
            <span className="badge">Node.js</span>
            <span className="badge">Python</span>
            <span className="badge">MongoDB</span>
            <span className="badge">LLM APIs</span>
          </div>

          {/* CTAs */}
          <div className="hero-ctas fade-in">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
              <FiExternalLink size={18} />
            </button>
            <a 
              href="/Ali_Kirat_Resume.pdf" 
              download="Ali_Kirat_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
            <button className="btn btn-outline" onClick={scrollToContact}>
              Hire Me
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links fade-in">
            <a 
              href="https://github.com/alikirat" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/ali-kirat" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="mailto:alikirat.dev@gmail.com"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
