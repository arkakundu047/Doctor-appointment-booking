import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {!isAuthenticated ? (
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
        ) : (
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        )}
        <div className="hero-section">
          <div className="hero-content">
            <h2>Your Health, Our Priority</h2>
            <p>Book appointments with qualified doctors instantly</p>
            <div className="cta-buttons">
              <Link to="/book-appointment" className="btn btn-primary">
                Book Appointment
              </Link>
              <Link to="/find-doctor" className="btn btn-outline">
                Find a Doctor
              </Link>
            </div>
          </div>
          <div className="features">
            <div className="feature-card">
              <i className="fas fa-user-md"></i>
              <h3>Expert Doctors</h3>
              <p>Consult with top specialists</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-clock"></i>
              <h3>24/7 Service</h3>
              <p>Round the clock support</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-hospital"></i>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art equipment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
