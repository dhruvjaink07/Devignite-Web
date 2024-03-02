// HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="Home-page">
        <header className="welcome-section">
          <h1 id='title'>WELCOME BACK</h1>
        </header>
        <div class = "gap"></div>
        <div class = "cards">
        <section className="projects-section">
          <h2>Recommended Projects</h2>
          <div className="projects-scroll">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            {/* Add more ProjectCards as needed */}
          </div>
        </section>
        <section className="projects-section">
          <h2>Recent Projects</h2>
          <div className="projects-scroll">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            {/* Add more ProjectCards as needed */}
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
