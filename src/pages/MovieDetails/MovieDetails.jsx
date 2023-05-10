import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
// import { IoChevronBack } from 'react-icons/io5';
import { getMovieDetails } from 'services/Api';
import { ColorRing } from 'react-loader-spinner';


const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(
    location.state?.from ?? '/goit-react-hw-05-movies/movies'
  );

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (movie === null) {
    return null;
  }

  const posterPath =
    movie.poster_path !== null
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '';

  return (
    <div>
      <Link to={backLinkHref.current} >
        <div >
          <span>Back</span>
        </div>
      </Link>
      <div >
        <img src={posterPath} alt={'poster'} width={200} />
        <div >
          <p >{movie.title}</p>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
          <p >Overview</p>
          <p>{movie.overview}</p>
          <p >Genres</p>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <p >Additional information</p>
        <ul>
          <li >
            <Link to="cast" >
              Cast
            </Link>
          </li>
          <li >
            <Link to="reviews" >
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense
          fallback={
            <div>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
              <div>Loading...</div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;