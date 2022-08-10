import React, { Component } from 'react';
import Vulf from './img/vulf-site.png';
import JpFlashcards from './img/jp-flashcards.png';
import NotesApp from './img/notes-app.png'
import './Projects.css';
import './style.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects"></div>

        <div className="projects-bg">
        <div className="project-container">
          <div className="project-card">

            <div className="project-name">
              <h1>Note Taking App</h1>
              <div className="img-shadow">
                <div className="img-border">
                  <a href="https://stackblitz.com/edit/angular-ivy-avykfm?file=src/app/note-create/note-create.component.ts" target="_blank" rel="noreferrer">
                    <img className="project-img" src={NotesApp} alt="Notes App" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                This is a simple note taking app. The notes are stored <br /> in the browser using localStorage. <br /> <br /> Created with Angular, TypeScript, HTML, and CSS.
              </p>
            </div>
              <div className="links">
                <a href="https://stackblitz.com/edit/angular-ivy-avykfm?file=src/app/note-create/note-create.component.ts" target="_blank" rel="noreferrer">
                  View Project
                </a>
                <a href="https://github.com/RichDoherty/Notes-App" target="_blank" rel="noreferrer">
                  View Code
                </a>
              </div>
            </div>

          <div className="project-card">

            <div className="project-name">
              <h1>Japanese Flashcards</h1>
              <div className="img-shadow">
                <div className="img-border">
                  <a href="https://richdoherty.github.io/japanese-flashcards/" target="_blank" rel="noreferrer">
                    <img className="project-img" src={JpFlashcards} alt="Japanese Flashcards" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                An app to help people study Japanese, specifically <br /> Hiragana and Katakana, with the use of flashcards. <br /> <br /> Created with React, Javacript, HTML, and CSS.
              </p>
            </div>
              <div className="links">
                <a href="https://richdoherty.github.io/japanese-flashcards/" target="_blank" rel="noreferrer">
                  View Project
                </a>
                <a href="https://github.com/RichDoherty/japanese-flashcards" target="_blank" rel="noreferrer">
                  View Code
                </a>
              </div>
          </div>

          <div className="project-card">

            <div className="project-name">
              <h1>Vulpeck Fan-Site</h1>
              <div className="img-shadow">
                <div className="img-border">
                  <a href="https://richdoherty.github.io/Vulfpeck/index.html" target="_blank" rel="noreferrer">
                    <img className="project-img" src={Vulf} alt="A screenshot of my Vulpeck fan site." />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                A fan site I made for the band Vulfpeck. <br /> <br /> Created with HTML and CSS.
              </p>
            </div>
              <div className="links">
                <a href="https://richdoherty.github.io/Vulfpeck/index.html" target="_blank" rel="noreferrer">
                  View Project
                </a>
                <a href="https://github.com/RichDoherty/Vulfpeck" target="_blank" rel="noreferrer">
                  View Code
                </a>
              </div>
          </div>


        </div>
        </div>
      </div>
    )
  }
}

export default Projects;
