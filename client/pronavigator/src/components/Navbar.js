/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Collab Hub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Recent</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>
        {`
          .navbar-nav .nav-link.active,
          .navbar-nav .nav-link:focus,
          .navbar-nav .nav-link:hover {
            transition:0.2s;
            color: blue; /* Change to your desired color */
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
