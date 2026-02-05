import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import './Contact.css';

/**
 * Contact Component
 * Contact form and information for both employment and freelance inquiries
 */
const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    // Netlify handles form submission automatically
    setFormStatus('sending');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Available for full-time employment and select freelance projects. 
          Whether you're hiring for your team or need help with a project, I'd love to hear from you.
        </p>

        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  placeholder="What can I help you with?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-container">
            <h3>Get in Touch</h3>
            
            <div className="contact-cards">
              <div className="contact-mini-card">
                <div className="contact-mini-icon">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:alikirat.dev@gmail.com">alikirat.dev@gmail.com</a>
                </div>
              </div>

              <div className="contact-mini-card">
                <div className="contact-mini-icon">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ali-kirat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/ali-kirat
                  </a>
                </div>
              </div>

              <div className="contact-mini-card">
                <div className="contact-mini-icon">
                  <FiGithub size={24} />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/alikirat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/alikirat
                  </a>
                </div>
              </div>

              <div className="contact-mini-card">
                <div className="contact-mini-icon">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Claremont, CA</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <p>
                <strong>Response Time:</strong> I typically respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
