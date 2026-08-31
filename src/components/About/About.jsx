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
            <p>I'm a <strong>full-stack software engineer</strong> based in Claremont, CA, building production web applications using <strong>React, TypeScript, Node.js, and PHP/Laravel</strong>. My path here wasn't typical: before writing web applications, I was studying world religions, philosophy, and classical texts in graduate school.
          </p>
          <p>
            Years of teaching and consulting taught me how to listen closely, think clearly
            under pressure, and work through structural problems with patience. I bring those
            same instincts to code now: I don't just build full-stack solutions, I design every
            system with the person on the other end of it in mind.
          </p>
          <p>
            I build with <strong>AI as a core part of the stack</strong> - integrating
            Anthropic Claude, Groq, and OpenAI APIs into production applications, and
            contributing to multi-agent systems using Google's Agent Development Kit.
            I use Claude Code and GitHub Copilot as daily development tools, not experiments.
          </p>
          <p>
            Away from the keyboard, that same curiosity keeps going. I'm usually out on a
            Southern California trail, playing pickup sports, or in the middle of a good book.
            Coffee is its own thing entirely: dialing in an espresso shot or trying a new roast
            takes the same focus I bring to debugging a stubborn API.
          </p>
          <p>
            <strong>Available for:</strong> Full-time engineering roles and select freelance projects. Remote preferred, LA area considered.
          </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">3+</div>
              <div className="highlight-label">AI-Integrated Projects</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">5+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
              <div className="highlight-card">
              <div className="highlight-number">3</div>
              <div className="highlight-label">Languages Spoken</div>
            </div>

            <div className="glance-card">
              <h3 className="glance-title">Ali at a Glance</h3>
              <ul className="glance-list">
                <li><strong>Based in:</strong> Claremont, CA</li>
                <li><strong>Core stack:</strong> JavaScript, React, Node.js, PHP/Laravel, MongoDB, Python</li>
                <li><strong>Background:</strong> MA in Religious Studies (Claremont Graduate University), former educator and consultant</li>
                <li><strong>Languages:</strong> Fluent in English, Amharic, and Arabic</li>
                <li><strong>Fuel of choice:</strong> Single-origin pour-overs and a well-dialed espresso shot</li>
              </ul>
              <h4 className="glance-subtitle">Out of Office</h4>
              <ul className="glance-interests">
                <li><span className="glance-icon" aria-hidden="true">🥾</span> Hiking Southern California's local trails</li>
                <li><span className="glance-icon" aria-hidden="true">⚽</span> Pickup sports and staying active</li>
                <li><span className="glance-icon" aria-hidden="true">📚</span> History, philosophy, and classical literature</li>
                <li><span className="glance-icon" aria-hidden="true">☕</span> Chasing the chemistry and craft of specialty coffee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
