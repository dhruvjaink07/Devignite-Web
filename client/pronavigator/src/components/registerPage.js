import React from 'react';
import '../styles/register.css';

function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card card-pad card-margin">
        <h2 className="text-center mt-3 mb-3">Sign Up</h2>
        <form className='form-control-sm'>
          <div className="container d-flex gap-3 justify-content-center">
            <div className="col-6">
              <div className="mb-2">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-2">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">Github username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-2">
            <label htmlFor="confPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confPassword" />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-3">Register</button>
          </div>
        </form>
        <div className="text-center">
          <p className='--bs-primary-bg-subtle'>Already have an account? <a href="#">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
