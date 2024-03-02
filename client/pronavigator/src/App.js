// src/App.js
import React,{useState, useEffect} from 'react';
import './App.css';
import CategorySelectionPage from './components/CategorySelectionPage';
import Login from './components/loginPage';
import Register from './components/registerPage';
import GitHubRepositories from './components/githubRepo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/categorySelectionPage' element={<CategorySelectionPage/>}></Route>
        <Route path='/githubRepos' element={<GitHubRepositories/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
