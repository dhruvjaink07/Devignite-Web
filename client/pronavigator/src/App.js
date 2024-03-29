// src/App.js
import React,{useState, useEffect} from 'react';
import './App.css';
import CategorySelectionPage from './components/CategorySelectionPage';
import Login from './components/loginPage';
import Register from './components/registerPage';
import GitHubRepositories from './components/githubRepo';
import RepoDetails from './components/RepoDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import UserProfileWithAvatarPicker from './components/userProfileWithAvatar';

function App() {
  // Sample user data
  const user = {
    name: 'John Doe',
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'Passionate developer and nature lover.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/select-categories" element={<CategorySelectionPage />} />
          <Route path="/githubRepos" element={<GitHubRepositories />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfileAvatar" element={<UserProfileWithAvatarPicker />} />
          <Route path="/repoDetails/:id" element={<RepoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
