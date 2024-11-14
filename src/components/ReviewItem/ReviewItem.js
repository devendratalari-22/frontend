import React from 'react';
import '../ReviewItem/reviewItem.css'

const ReviewItem = ({ review, onDeleteReview }) => {
  return (
    <div className="review-item">
      <h3>{review.bookTitle} By {review.author}</h3>
      <p>{review.reviewContent}</p>
      <p><strong>Reviewer: </strong> {review.reviewerName}</p>
      {review.rating && <p><strong>Rating:</strong> {review.rating} stars</p>}
      <button onClick={() => onDeleteReview(review._id)}>Delete</button>
    </div>
  );
};

export default ReviewItem;
