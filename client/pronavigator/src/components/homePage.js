// HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard.js';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="Home-page">
        <header className="welcome-section">
          <h1 id='title'>WELCOME BACK,</h1>
          <p id='subtitle'>Fawaz Khan</p>
        </header>
        <div className="gap"></div>
        <div className="cards">
          <section className="projects-section">
            <h2 className="heading">Recommended Projects</h2>
            <div className="projects-scroll">
              <ProjectCard title="Project 1" />
              <ProjectCard title="Project 2" />
              <ProjectCard title="Project 3" />
              <ProjectCard title="Project 4" />
              <ProjectCard title="Project 5" />
              <ProjectCard title="Project 6" />
              <ProjectCard title="Project 7" />
              {/* Add more ProjectCards as needed */}
            </div>
          </section>
        <section className="projects-section">
          <h2 class = "heading">Recent Projects</h2>
          <div className="projects-scroll">
          <ProjectCard title="Project 1" />
              <ProjectCard title="Project 2" />
              <ProjectCard title="Project 3" />
              <ProjectCard title="Project 4" />
              <ProjectCard title="Project 5" />
              <ProjectCard title="Project 6" />
              <ProjectCard title="Project 7" />
            {/* Add more ProjectCards as needed */}
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
