// src/App.js
import React,{useState, useEffect} from 'react';
import './App.css';
import CategorySelectionPage from './components/CategorySelectionPage';
import Login from './components/loginPage';
import Register from './components/registerPage';
import GitHubRepositories from './components/githubRepo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RepoDetails from './components/RepoDetails';
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/categorySelectionPage' element={<CategorySelectionPage/>}></Route>
        <Route path='repoDetails' element={<RepoDetails/>}></Route>
        <Route path='/githubRepos' element={<GitHubRepositories/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
