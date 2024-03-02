// ProjectCard.js
import React from 'react';
import '../styles/HomePage.css'; // Import your project card styling

function ProjectCard({ title }) {
  return (
    <div className="project-card">
      {/* Placeholder for project content */}
      <h3 className="project-title">{title}</h3>
    </div>
  );
}

export default ProjectCard;
