import React from "react";
// import movies from '../data/Movies';
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";


const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, mobile, movieTitle } = location.state || {};

  const bookingId = Math.floor(Math.random() * 1000000); // Generate random ID

  if (!name || !email || !mobile) {
    return <h2>Invalid Booking! Please go back and fill the form.</h2>;
  }

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p><strong>Movie:</strong> {movieTitle}</p>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default ConfirmationPage;
