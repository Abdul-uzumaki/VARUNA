import React from "react";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div
      className="register-container"
      style={{
        backgroundImage: `url('/planet-4.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="form-box">
        <h1 className="title">Join the Mission</h1>
        <p className="description">
          Enter your details to embark on this interstellar adventure!
        </p>
        <form>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="input-field" 
          />
          <input 
            type="number" 
            placeholder="Age" 
            className="input-field" 
          />
          <input 
            type="text" 
            placeholder="College Name" 
            className="input-field" 
          />
          <input 
            type="text" 
            placeholder="Course" 
            className="input-field" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="input-field" 
          />
          
          {/* Screenshot Upload Button */}
          <div className="upload-container">
            <label className="upload-button">
              Upload Screenshot
              <input 
                type="file" 
                accept="image/*" 
                className="file-input" 
              />
            </label>
          </div>
          
          <button className="neon-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
