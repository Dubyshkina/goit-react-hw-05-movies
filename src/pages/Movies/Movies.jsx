import MovieList from 'components/MovieList/MovieList';
import { getSearchedMovie } from 'services/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchSearchedMovies = async query => {
    if (query === null) {
      return;
    }
    try {
      const data = await getSearchedMovie(query);
      setMovies(data);
    } catch (error) {
      console.log(error)
    }
  };

  const handleMovieSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements.name.value;
    setSearchParams({ query: input });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    fetchSearchedMovies(query);
  }, [searchParams]);

  return (
    <div>
      <form action="" onSubmit={handleMovieSubmit}>
        <input type="text" name="name" placeholder="Search movie..." />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
