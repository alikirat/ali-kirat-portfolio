import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

/**
 * Main App Component
 * Portfolio website for Ali Kirat - Full-Stack Developer
 * Single-page application with smooth scrolling navigation
 * Dual-purpose: Employment opportunities and freelance projects
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ali Kirat. Built with React. Available for employment and freelance projects.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
