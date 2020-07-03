import React, { Component } from 'react';
import Vulf from './img/vulf-site.png';
import JpFlashcards from './img/jp-flashcards.png';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects"></div>

        <div className="project-container">
        <div className="project-card">

          <div className="project-name">
            <h1>Japanese Flashcards</h1>
            <div className="img-shadow">
              <div className="img-border">
                <img className="project-img" src={JpFlashcards} alt="Project 2." />
              </div>
            </div>
          </div>

          <div className="project-description">
            <p>
              An app to help people study Japanese, specifically <br /> Hiragana and Katakana, with the use of flashcards.
            </p>
          </div>
            <div className="links">
              <a href="https://richdoherty.github.io/japanese-flashcards/" target="_blank">
                View Project
              </a>
              <a href="https://github.com/RichDoherty/japanese-flashcards" target="_blank">
                View Code
              </a>
            </div>
        </div>

          <div className="project-card">

            <div className="project-name">
              <h1>Vulpeck Fan-Site</h1>
              <div className="img-shadow">
                <div className="img-border">
                  <img className="project-img" src={Vulf} alt="A screenshot of my Vulpeck fan site." />
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                A fan site I made for the band Vulfpeck.
              </p>
            </div>
              <div className="links">
                <a href="https://richdoherty.github.io/Vulfpeck/index.html" target="_blank">
                  View Project
                </a>
                <a href="https://github.com/RichDoherty/Vulfpeck" target="_blank">
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
