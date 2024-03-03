// HomePage.js
import React, { useEffect,useState } from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar.js';
import ProjectCard from './ProjectCard.js';
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const [cookie,setCookie] = useCookies(['token'])
  const [user,setUser] = useState(null)
  useEffect(()=>{
    const getUser = () => {
      fetch('http://127.0.0.1:3001/api/auth/me',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${cookie.token}`
        },
      }).then(async response =>{
        const data = await response.json()
        if(response.status ===200){
          setUser(data)
        }
        else{
          navigate('/login')
        }
      })
    }

    getUser()
    
  },[])
  return (
    <>
      <Navbar links={true} />
      <div className="Home-page">
        <header className="welcome-section">
          <h1 id='title'>WELCOME BACK,</h1>
          <p id='subtitle'>{user?.username}</p>
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
          <br></br>
        <section className="projects-section" id='recent'>
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
