import React, { useState } from "react";
import "../Styles/Sidebar.css";
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";  // Import FaEnvelope for email
import { BsJournalCode, BsLinkedin } from "react-icons/bs";
import { GrContact } from "react-icons/gr";  // Import the GrContact icon for the main toggle

function Sidebar() {
  const [isExtended, setIsExtended] = useState(false);

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    const email = "your-email@example.com"; // Replace with your email
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy email: " + err);
    });
  };

  // Function to open LinkedIn
  const goToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/tristan-collett-4904ba293"; // Replace with your LinkedIn URL
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#section1">
            <FaUser className="icon" />
          </a>
        </li>
        <li>
          <a href="#section2">
            <BsJournalCode className="icon" />
          </a>
        </li>
        <li>
          <a href="#section3">
            <FaProjectDiagram className="icon" />
          </a>
        </li>
      </ul>

      {/* Bottom Toggleable Section */}
      <div className={`bottom-section ${isExtended ? 'extended' : ''}`}>
        <button className="toggle-button" onClick={() => setIsExtended(!isExtended)}>
          <GrContact className="icon" />  {/* Main toggle icon */}
        </button>

        {/* Extended Icons Section (above the main icon) */}
        <div className="extended-icons">
          <button onClick={copyEmailToClipboard} className="icon-btn">
            <FaEnvelope className="icon" />  {/* Email clipboard icon */}
          </button>
          <button onClick={goToLinkedIn} className="icon-btn">
            <BsLinkedin className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
