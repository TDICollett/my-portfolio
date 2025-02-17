import React from "react";
import { TypeAnimation } from 'react-type-animation'; 
import "../Styles/Introduction.css";
import Pic from "../Images/Introimage.PNG"; 

function Introduction() {
  return (
    <section className="section introduction">
      {/* SVG Background */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="svg-background"
      >
        <defs>
          <linearGradient id="bg">
            <stop offset="0%" style={{ stopColor: "rgba(202, 204, 212, 0.06)" }}></stop>
            <stop offset="50%" style={{ stopColor: "rgba(240, 255, 255, 0.6)" }}></stop>
            <stop offset="100%" style={{ stopColor: "rgba(86, 87, 86, 0.2)" }}></stop>
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="10s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>

      {/* Main content */}
      <div className="content">
        <h1>
          <TypeAnimation
            sequence={[
              'Hi, I\'m Tristan!',
              1000,
              'I\'m a Software Developer',
              1000,
              'I\'m Driven',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        
        <p>As a junior developer passionate about learning, I have a strong foundation in database development, AI, and machine learning. Coding is my creative outlet, with a special focus on front-end development where I can design engaging user experiences. I’m also skilled in back-end development, ensuring projects are functional and efficient. In addition to core technologies, I am proficient in several programming languages and have created numerous websites and apps. With a drive to innovate, I’m excited about the possibilities ahead in tech.</p>
      </div>
        <div className="img-container">
          <img src={Pic} alt="Tristan" class="image-box"/>
        </div>
    </section>
  );
}

export default Introduction;


