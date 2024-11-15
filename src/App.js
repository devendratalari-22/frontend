import { React,  useState, useEffect } from 'react';
import ReviewForm from './components/ReviewForm/ReviewForm';
import ReviewList from './components/ReviewList/ReviewList';
import axios from 'axios'
import './App.css'

const App = ()=>{

  const [reviews, setReviews] = useState([]);

  // Fetch reviews from the backend when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://backend-holo.onrender.com/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  const handleAddReview = async (newReview) => {
    try {
      const response = await axios.post('https://backend-holo.onrender.com/api/reviews', newReview);
      setReviews([...reviews, response.data]);
    } catch (error) {
      console.error("Failed to add review:", error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`https://backend-holo.onrender.com/api/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  return (
    <div className="App">
      <h1>Book Review App</h1>
      <ReviewForm onAddReview={handleAddReview} />
      <ReviewList reviews={reviews} onDeleteReview={handleDeleteReview} />
    </div>
  );
};

export default App;
