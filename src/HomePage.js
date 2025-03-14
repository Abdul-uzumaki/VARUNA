import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      className="space-container"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/planet-1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="content">
    
        <h2 className="varuna">Find They?</h2>
        <p className="description">
          Join an interstellar adventure. "Find They?" is a thrilling challenge that will test your problem-solving skills in the vast cosmos.
          Are you ready to explore the unknown?
        </p>
        <Link to="/register">
          <button className="neon-button">Join the Mission 🚀</button>
        </Link>

        {/* IMAGE BUTTON */}
        <div className="button-container">
          <img
            src={`${process.env.PUBLIC_URL}/search_Button-removebg-preview.png`}
            alt="Popup Button"
            className="image-button"
            onClick={() => setIsPopupOpen(true)}
          />
        </div>
      </div>

      {/* POPUP MODAL */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>🚀 Interstellar Mission</h2>
            <p>Welcome to the cosmic adventure! Ready to explore?</p>
            <button className="close-button" onClick={() => setIsPopupOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
