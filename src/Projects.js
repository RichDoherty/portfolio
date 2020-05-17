import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects"></div>

        <div className="project-container">
          <div className="project-card">

            <div className="project-name">
              <h1>Vulpeck Fan-Site</h1>
              <div className="img-shadow">
                <div className="img-border">
                  <img className="project-img" src="/img/vulf-site.png" alt="A screenshot of my Vulpeck fan site." />
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                A fan site I made for the band Vulfpeck.
              </p>
            </div>
              <div className="links">
                <a href="https://richdoherty.github.io/Vulfpeck/index.html">
                  View Project
                </a>
                <a href="https://github.com/RichDoherty/Vulfpeck">
                  View Code
                </a>
              </div>
          </div>

          <div className="project-card">

            <div className="project-name">
              <h1>Project 2</h1>
              <div className="img-shadow">
                <div className="img-border">
                  <img className="project-img" src="" alt="Project 2." />
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                Second project goes here.
              </p>
            </div>
              <div className="links">
                <a href="">
                  View Project
                </a>
                <a href="">
                  View Code
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
