import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
    
  }, [movieId]);
  if (reviews === null || reviews.length === 0) {
    return <p>No reviews found</p>;
  }
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id} className={s.listItem}>
          <p className={s.author}> {author}</p>
          <p className={s.content}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;