import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import movies from '../data/Movies';
import { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { ...formData, movieTitle: movie.title } });
  };

  return (
    <div className="form-container">
      <h2>Book Ticket for {movie.title}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="mobile" placeholder="Enter Mobile" value={formData.mobile} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default BookingForm
