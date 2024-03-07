// ProjectCard.js
import React from 'react';
import '../styles/HomePage.css'; // Import your project card styling

function ProjectCard({ repo }) {
  

  return (
    <div className="project-card">
      <img src={repo?.owner.avatar_url} className='repoimg' alt='...'></img>
      {/* Placeholder for project content */}
      <h6 className="project-title">{repo?.name}</h6>
    </div>
  );
}

export default ProjectCard;
