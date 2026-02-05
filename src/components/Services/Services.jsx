import React from 'react';
import { FiCode, FiServer, FiSmartphone, FiZap } from 'react-icons/fi';
import './Services.css';

/**
 * Services Component
 * Displays freelance services offered to clients
 */
const Services = () => {
  const services = [
    {
      icon: <FiCode size={32} />,
      title: "Full-Stack Web Applications",
      description: "Custom web applications built with the MERN stack. From concept to deployment, I handle database design, API development, and responsive frontend implementation.",
      features: ["React frontends", "Node.js/Express backends", "MongoDB databases", "RESTful APIs"]
    },
    {
      icon: <FiServer size={32} />,
      title: "API Development & Integration",
      description: "Secure, scalable REST APIs with authentication, data validation, and comprehensive documentation. I can also integrate third-party APIs into your existing systems.",
      features: ["JWT authentication", "API documentation", "Third-party integrations", "Error handling"]
    },
    {
      icon: <FiSmartphone size={32} />,
      title: "Responsive Web Design",
      description: "Mobile-first, accessible interfaces that work beautifully across all devices. Clean code, smooth animations, and attention to user experience.",
      features: ["Mobile-first design", "Cross-browser compatible", "Performance optimized", "Accessibility focused"]
    },
    {
      icon: <FiZap size={32} />,
      title: "AI Integration & Automation",
      description: "Integrate AI capabilities into your applications. From chatbots to multi-agent systems, I help businesses leverage modern AI tools to automate workflows.",
      features: ["AI chatbots", "Automation workflows", "Data analysis tools", "Smart integrations"]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="services-subtitle">
          How I can help bring your project to life
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p className="cta-text">Ready to start your project?</p>
          <a href="#contact" className="btn btn-primary btn-large">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
