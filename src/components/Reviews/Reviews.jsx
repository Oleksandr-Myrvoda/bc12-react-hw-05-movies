import { useState, useEffect } from "react";

import * as apiService from "../../service/apiService";

const Reviews = ({ location, match }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const reviewsResults = () => {
      const splitUrl = match.url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      apiService
        .Reviews(location.state?.id || id)
        .then((results) => setReviews(results))
        .catch((error) => setError(error.message));
    };
    reviewsResults();
  }, [location.state?.id, match.url]);

  const isShowReviews = reviews.length > 0;
  return (
    <>
      {isShowReviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4> Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </>
  );
};

export default Reviews;
