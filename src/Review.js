import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';

function Review() {
  return (
    <div className="review">
      <h3>Reviews/Feedback</h3>
      <div className="review_container">
        <Link to="/review">
          <div className="review_container_item">
            <h4>Ratings to Award(to Sellers)</h4>
            <div className="review_container textInput">
              <p>There is no reveiw</p>
            </div>
          </div>
        </Link>
        <Link to="/review/pending">
          <div className="review_container_item">
            <h4>Pending Ratings</h4>
            <div className="review_container textInput">
              <p>There is no reveiw</p>
            </div>
          </div>
        </Link>
        <Link to="/review/myrating">
          <div className="review_container_item">
            <h4>My Ratings(as Buyer)</h4>
            <div className="review_container textInput">
              <p>There is no reveiw</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Review;
