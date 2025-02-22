
  import { useLocation, useNavigate } from 'react-router-dom';
  import gsap from 'gsap';

  function MovieDetail() {
    const location = useLocation();
    const movie = location.state?.movie;
    const navigate = useNavigate();

    if (!movie) {
      return <p>No movie details available</p>;
    }

    const handleGoBack = () => {
      const detailsElement = document.querySelector('.movie-details');
      
      gsap.to(detailsElement, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: 'power2.in',
        onComplete: () => navigate(-1)
      });
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
