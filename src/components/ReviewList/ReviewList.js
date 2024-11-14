import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';

import '../ReviewList/reviewList.css'

const ReviewList = ({ reviews, onDeleteReview }) => {
  return (
    <div className="review-list-container">
      {reviews.map((review) => (
        <ReviewItem key={review._id} review={review} onDeleteReview={onDeleteReview} />
      ))}
    </div>
  );
};

export default ReviewList;
