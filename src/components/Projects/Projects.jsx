import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, featuredProjects } from '../../data/projects';
import './Projects.css';

/**
 * Projects Component
 * Displays project portfolio with filter options
 */
const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          A selection of projects showcasing full-stack development, AI integration, and modern web technologies
        </p>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Toggle to show all projects */}
        {!showAll && projects.length > featuredProjects.length && (
          <div className="projects-toggle">
            <button 
              className="btn btn-secondary"
              onClick={() => setShowAll(true)}
            >
              View All Projects ({projects.length})
            </button>
          </div>
        )}
        
        {showAll && (
          <div className="projects-toggle">
            <button 
              className="btn btn-secondary"
              onClick={() => setShowAll(false)}
            >
              Show Featured Only
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
