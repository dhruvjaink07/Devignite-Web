// src/App.js
import React from 'react';
import './App.css';
import CategorySelectionPage from './components/CategorySelectionPage';
import Login from './components/loginPage';
import Register from './components/registerPage';
import HomePage from './components/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/CategorySelectionPage' element={<CategorySelectionPage/>}></Route>
          {/* Add a route for the home page */}
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
