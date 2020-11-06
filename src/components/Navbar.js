import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#me">
          CV
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#work-experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formation">
                Formation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#competence">
                Competence
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
