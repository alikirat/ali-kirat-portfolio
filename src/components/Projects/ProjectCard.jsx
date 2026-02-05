import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

/**
 * ProjectCard Component
 * Reusable card for displaying project information
 * @param {Object} project - Project data object
 */
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Project Image/Placeholder */}
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-img" />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title.charAt(0).toUpperCase()}</span>
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag tag-more">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Project Links */}
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiExternalLink size={18} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiGithub size={18} />
              Code
            </a>
          )}
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiGithub size={18} />
              Frontend
            </a>
          )}
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiGithub size={18} />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
