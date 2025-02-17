import React, { useState, useEffect, useRef } from "react";
import "../Styles/Skills.css";
import gifTopLeft from "../Images/Gif1.gif"; // Replace with your actual file name
import gifTopRight from "../Images/Gif2.gif"; // Replace with your actual file name

function Skills() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const progressData = [
    { language: "AI and Machine Learning", percentage: 50 },
    { language: "Database Development", percentage: 70 },
    { language: "Web Development", percentage: 80 },
  ];

  // Use IntersectionObserver to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in the viewport, set inView to true
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section skills">
      <h1>Skills</h1>
      <div className="skills-description-wrapper">
        <img src={gifTopLeft} alt="Decorative GIF Left" className="gif-top-left" />
        <p className="skills-description">
          In my development journey, I have gained expertise in both database development and web development.
          I am proficient in creating and managing databases, ensuring optimal performance and data integrity.
          When it comes to web development, I specialize in front-end technologies such as HTML, CSS, JavaScript, and React,
          crafting dynamic and responsive user interfaces. On the back-end, I have experience with server-side programming and databases like SQL and NoSQL,
          allowing me to build robust and scalable applications. I also have hands-on experience with machine learning and AI technologies,
          allowing me to integrate intelligent features into web applications. My ability to work across the full stack gives me a well-rounded skill set,
          enabling me to contribute to a variety of projects with confidence and efficiency.
        </p>
        <img src={gifTopRight} alt="Decorative GIF Right" className="gif-top-right" />
      </div>
      <div className="skills-container">
        {progressData.map((data, index) => (
          <div key={index} className="progress-bar-wrapper">
            <svg
              className="circular-progress"
              width="150"
              height="150"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#006699", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#00bcd4", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle
                className="circle-bg"
                cx="60"
                cy="60"
                r="54"
                stroke="#e0e0e0"
                strokeWidth="12"
                fill="none"
              />
              <circle
                className="circle-progress"
                cx="60"
                cy="60"
                r="54"
                stroke={`url(#gradient-${index})`}
                strokeWidth="12"
                fill="none"
                strokeDasharray="339.292"
                strokeDashoffset={inView ? (339.292 * (100 - data.percentage)) / 100 : 339.292}
                style={{ transition: "stroke-dashoffset 2s ease-out" }}
              />
            </svg>
            <span className="language-label">{data.language}</span>
            <div className="percentage-text">{data.percentage}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
