import { React, useState } from 'react';
import '../ReviewForm/reviewForm.css'

const ReviewForm = ({ onAddReview }) => {
  const [formData, setFormData] = useState({ bookTitle: '', author: '', reviewContent: '', reviewerName: '', rating: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(formData);
    setFormData({ bookTitle: '', author: '', reviewContent: '', reviewerName: '', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='review-form-container'>
      <input className='input' type="text" placeholder="Book Title" value={formData.bookTitle} onChange={(e) => setFormData({...formData, bookTitle: e.target.value})} required />
      <input type="text" placeholder="Author" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} required />
      <textarea placeholder="Review Content" value={formData.reviewContent} onChange={(e) => setFormData({...formData, reviewContent: e.target.value})} required />
      <input type="text" placeholder="Reviewer Name" value={formData.reviewerName} onChange={(e) => setFormData({...formData, reviewerName: e.target.value})} required />
      <input type="number" placeholder="Rating (1-5)" min="1" max="5" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
