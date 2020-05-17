import React, { Component } from 'react';
import $ from 'jquery';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    $('.menu-toggle').on('click', function() {
        $('#nav-ul').toggleClass('open');
    });

    $('.nav-option').on('click', function() {
      $('#nav-ul').toggleClass('open');
    });

    $('#nav-ul').on('click', function(e) {
      e.stopPropagation();
    })
  }

  render() {
    return (
      <div className="header">
        <header id="header">
          <div className="group">
            <a href="#intro" className="logo">
              {/* <img src="/img/logo.png" alt="https://www.freepik.com/free-photos-vectors/logo>Logo vector created by sentavio - www.freepik.com" className="main-logo"/> */}
              <div className="header-name">
                <h1>Richard Doherty</h1>
                {/*<h2>Front-end Web Developer</h2>*/}
              </div>
            </a>

            <span className="fa fa-bars menu-toggle"></span>

            <nav id="nav">
              <ul id="nav-ul" className="unopened">
                <li>
                  <a className="nav-option" href="#intro">
                  Home
                  </a>
                </li>
                <li>
                  <a className="nav-option" href="#projects">
                  Projects
                  </a>
                </li>
                <li>
                  <a className="nav-option" href="#contact">
                  Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
