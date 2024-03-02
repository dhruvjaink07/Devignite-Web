import React from 'react';
import '../styles/login.css';
function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card card-pad card-margin">
        <h2 className="text-center mt-3 mb-3">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <div className="input-width">
            <input type="email" className="form-control input-width" id="email" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-3">Login</button>
          </div>
        </form>
        <div className="text-end">
          <p className='forgot'>Forgot Password?</p>
        </div>
        <div className="text-center">
          <p className='--bs-primary-bg-subtle'>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
