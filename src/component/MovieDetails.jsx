import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetail() {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <p>No movie details available</p>;
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
    <div className="movie-details">
      <h1 style={{ fontFamily: 'Poppins'}}>{movie['#TITLE']}</h1>
      <img
        src={movie['#IMG_POSTER']}
        alt={movie['#TITLE']}
        style={{ width: '30%', height: '30%', borderRadius: '10px' }}
      />
      <p style={{ margin: '10px', fontSize: '20px' }}>Rating: 4.5 ⭐</p>
      <p style={{ margin: '10px', fontSize: '20px' }}>Actors: {movie['#ACTORS']}</p>
      </div>
    <button onClick={handleGoBack} style={{float: 'left', margin: '10px', fontSize: '20px'}}>Go Back</button>
    </>
  );
}

export default MovieDetail;
