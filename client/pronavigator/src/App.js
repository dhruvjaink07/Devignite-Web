// src/App.js
import React from 'react';
import './App.css';
import CategorySelectionPage from './components/CategorySelectionPage';
import Login from './components/loginPage';
import Register from './components/registerPage';
import GitHubRepositories from './components/githubRepo';
// import UserProfile from './components/UserProfile'; // Correct import statement
import RepoDetails from './components/RepoDetails'; // Placeholder import for RepoDetails
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/categorySelectionPage" element={<CategorySelectionPage />} />
          <Route path="/githubRepos" element={<GitHubRepositories />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/userProfile" element={<UserProfile />} /> */}
          <Route path="/repoDetails/:id" element={<RepoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
