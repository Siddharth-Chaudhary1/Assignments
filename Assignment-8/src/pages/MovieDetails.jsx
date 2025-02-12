import React from 'react'
import movies from '../data/Movies';
import { useParams } from "react-router-dom";
import './MovieDetails.css';
import { useNavigate } from 'react-router-dom';


const MovieDetails = () => {
    const { id } = useParams(); // Get movie ID from URL
    const navigate = useNavigate(); // Navigation
    const movie = movies.find((m) => m.id === parseInt(id)); // Find movie

  return (
    <div>
       <div className="movie-details">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h3>IMDB : 8/10</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Optio distinctio doloremque sunt voluptatem, a assumenda provident, 
                    soluta tenetur sequi similique dicta molestiae architecto dolor ut commodi ducimus quas doloribus veniam.</p>
            <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
        </div>
    </div>
  )
}

export default MovieDetails;
