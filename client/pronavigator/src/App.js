import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/loginPage';
import Register from './components/registerPage';
import CategorySelectionPage from './components/CategorySelectionPage';
import { useCookies } from 'react-cookie';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [cookie,setCookie] = useCookies(['token'])
  const [user,setUser] = useState('')

  useEffect(()=>{
    const getUser = () =>{
      fetch('http://127.0.0.1:3001/api/auth/me',{
        method:'GET',
        headers:{
          'Content-Type':'Application/json',
          'Authorization':`Bearer ${cookie.token}`
        }
      }).then(async response=>{
        const data = await response.json()
        if(response.status === 200){
          setUser(data)
        }
      })
      
    }
    getUser()
  },[user])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/select-categories' element={<CategorySelectionPage user={user}></CategorySelectionPage>}></Route>
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
