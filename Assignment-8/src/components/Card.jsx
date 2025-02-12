import React from 'react'
import movies from '../data/Movies'
import { Link } from "react-router-dom"
import './Card.css'
const Card = () => {
  return (
    <div >
      <div className='cards'>
        {movies.map((movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id} 
            className='card'  >
            <img src={movie.image} alt="img" />
            <h2>{movie.title}</h2>
          </Link>  
        ))}
      </div>
    </div>
  )
}

export default Card;
