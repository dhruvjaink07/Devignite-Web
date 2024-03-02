import React from 'react';
import './App.css';
import Login from './components/loginPage';
import Register from './components/registerPage';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
