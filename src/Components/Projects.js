import React from "react";
import "../Styles/Projects.css";
import Stormgif from "../Images/storm.gif";
import Coffeegif from "../Images/coffee.gif";
import Birdgif from "../Images/bird.gif";

function Projects() {
  return (
    <section className="section projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        {/* GIFs container */}
        <div className="gifs-container">
          <img src={Stormgif} alt="Storm GIF" className="project-gif" />
          <img src={Coffeegif} alt="Coffee GIF" className="project-gif" />
          <img src={Birdgif} alt="Bird GIF" className="project-gif" />
        </div>
        {/* Project Thumbnails */}
        <div className="thumbnails-container">
          <div className="project-frame">In Progress</div>
          <div className="project-frame">In Progress</div>
          <div className="project-frame">In Progress</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;




