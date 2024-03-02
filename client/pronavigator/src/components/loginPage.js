import React, { useState } from 'react';
import '../styles/login.css';

import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import axios from 'axios'


function Login() {

  const navigate = useNavigate()
  const [cookie,setCookie] = useCookies(['token'])
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const handleLogin = async (e)=>{
    e.preventDefault()
    fetch('http://127.0.0.1:3001/api/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(async(response)=>{
      const data = await response.json()
      if(response.status === 200){
        setCookie('token',data.token,{ path: "/" })
        navigate('/')
      }
      else{
        setError(data.error)
        console.log(data.error)
      }
    })

  }
    const showError = () =>{
      if(error !== ''){
        return(
          <div className='error-message'>
            {error}
          </div>
        )
      }
    }

  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card card-pad card-margin">
        <h2 className="text-center mt-3 mb-3">Login</h2>
        {showError()}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <div className="input-width">
            <input type="email" className="form-control input-width" onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-3" onClick={handleLogin}>Login</button>
          </div>
        </form>
        <div className="text-end">
          <p className='forgot'>Forgot Password?</p>
        </div>
        <div className="text-center">
          <p className='--bs-primary-bg-subtle'>Don't have an account? <a href="/register">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
