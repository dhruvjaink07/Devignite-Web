// HomePage.js
import React, { useEffect,useState } from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar.js';
import ProjectCard from './ProjectCard.js';
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
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


  const accessToken = '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';
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
        axios.get('https://api.github.com/repositories', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(async (response) => {
            const fetchedRepositories = response.data;

            const repositoriesWithData = await Promise.all(fetchedRepositories.map(async repo => {
                const languagesResponse = await axios.get(repo.languages_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const languages = Object.keys(languagesResponse.data);

                const starResponse = await axios.get(repo.stargazers_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const starCount = starResponse.data.length;

                return { ...repo, languages, starCount };
            }));

            setRepositories(repositoriesWithData);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
    }, []);

  return (
    <>
      <Navbar links={true} />
      <div className="Home-page">
        <header className="welcome-section">
          <h1 id='title'>WELCOME,</h1>
          <p id='subtitle'>{user?.username}</p>
        </header>
        <div className="gap"></div>
        <div className="cards">
          <section className="projects-section">
            <h2 className="heading">Recommended Projects</h2>
            <div className="projects-scroll">
              {repositories.map((m)=>(
                <ProjectCard repo={m}></ProjectCard>
              ))}
            </div>
          </section>
          <br></br>
        <section className="projects-section" id='recent'>
          <h2 class = "heading">Recent Projects</h2>
          <div className="projects-scroll">
              {repositories.slice(0,20).reverse().map((m)=>(
                <ProjectCard repo={m}></ProjectCard>
              ))}
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
