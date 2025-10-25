import React from 'react';
import { imageUrl } from './movieApi';

const MovieGrid = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="movies-container">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          {movie.poster_path ? (
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
          ) : (
            <div className="blank-poster"></div>
          )}
          <h3>{movie.title}</h3>
          <p>Release: {movie.release_date || 'N/A'}</p>
          <p>Rating: {movie.vote_average || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid; 