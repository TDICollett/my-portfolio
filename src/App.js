import React, { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const sections = document.querySelectorAll(".section");
      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;

      let targetSection = null;

      if (e.deltaY > 0) {
        
        targetSection = [...sections].find(
          (section) => section.offsetTop > currentScroll
        );
      } else if (e.deltaY < 0) {
        
        targetSection = [...sections]
          .reverse()
          .find((section) => section.offsetTop < currentScroll);
      }

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    };

    
    window.addEventListener("wheel", handleScroll, { passive: false });

    
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        {/* Introduction Section */}
        <div id="section1" className="section">
          <Introduction title="Introduction" content="This is the content of Section 1." />
        </div>

        {/* Skills Section */}
        <div id="section2" className="section">
          <Skills title="Skills" content="This is the content of Section 2." />
        </div>

        {/* Projects Section */}
        <div id="section3" className="section">
          <Projects title="Projects" content="This is the content of Section 3." />
        </div>

        {/* Footer Section */}
        <div id="section4" className="section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;


