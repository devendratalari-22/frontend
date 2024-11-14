# Book Review App

A full-stack Book Review application where users can submit, view, and delete short book reviews. The app is built with **Node.js**, **Express**, and **MongoDB** on the backend, and **React** on the frontend.

## Features

- View a list of book reviews.
- Submit a new book review with the book title, author, review content, and reviewer’s name.
- Delete existing book reviews.
- Responsive design for mobile and desktop views.

## Project Structure

```plaintext
book-review-app/
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   ├── controllers/
│   │   └── reviewController.js   # Logic for handling requests
│   ├── models/
│   │   └── Review.js             # Review schema
│   ├── routes/
│   │   └── reviewRoutes.js       # Review routes
│   ├── server.js                 # Main server file
│   └── .env                      # Environment variables
├── frontend/
│   ├── public/                   # Public assets
│   ├── src/
│   │   ├── api/
│   │   │   └── reviewApi.js      # API calls to backend
│   │   ├── components/
│   │   │   ├── ReviewForm.js     # Form for adding reviews
│   │   │   ├── ReviewItem.js     # Single review display
│   │   │   └── ReviewList.js     # Review list component
│   │   ├── pages/
│   │   │   └── Home.js           # Home page
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # React DOM render
│   │   └── App.css               # Styling for the app
│   └── package.json              # Frontend dependencies
└── README.md

Prerequisites
- Node.js and npm installed.
- MongoDB installed locally or access to MongoDB Atlas for a cloud database.

##Getting Started

1. Clone the Repository:

    git clone https://github.com/your-username/book-review-app.git
    cd book-review-app

2. Backend Setup:

    Navigate to the backend folder:
    cd backend
    Set up environment variables:
    Create a .env file in the backend folder and add your MongoDB URI:
    MONGO_URI=your_mongodb_uri
    PORT=5000
    Start the backend server:
    npm run dev

3. Frontend Setup

    Open a new terminal window and navigate to the frontend folder:
    cd ../frontend
    Install dependencies:
    npm install 
    Start the frontend server:
    npm start

API Endpoints
    GET /api/reviews - Retrieve all book reviews.
    POST /api/reviews - Create a new book review.
    DELETE /api/reviews/:id - Delete a specific book review by ID.
Usage

    View Reviews: See the list of all submitted book reviews.
    Add a Review: Fill out the form and submit a new book review.
    Delete a Review: Use the delete button next to each review to remove it from the list.
    Technologies Used
    Backend: Node.js, Express, MongoDB
    Frontend: React, CSS
    Other: Axios (for API requests), nodemon (for backend auto-reloading)
    Folder Descriptions
    backend/config: Configuration for database connection.
    backend/controllers: Logic for handling requests to create, retrieve, and delete reviews.
    backend/models: MongoDB schema for reviews.
    backend/routes: API routes for managing reviews.
    frontend/src/api: Axios-based API requests.
    frontend/src/components: React components for form, individual review, and review list.
    frontend/src/pages: Main page component for the app.

Screenshots
    Home Page - Displays all book reviews with options to add or delete reviews.
    Responsive Design - Adapts to both desktop and mobile screens.

License
    This project is licensed under the MIT License.

Contributing
    Contributions are welcome! Please open an issue or submit a pull request for any changes.

This README.md covers the setup, project structure, usage, and relevant information about the Book Review App. Enjoy building and using the app!
