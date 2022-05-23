import React from 'react';
import { Link } from 'react-router-dom';

function Review() {
  return (
    <div>
      <Link to="/review">Ratings to Award(to Sellers)</Link>
      <Link to="/review/pending">Pending reviews</Link>
      <Link to="/review/myrating">My Ratings(as Buyer)</Link>
    </div>
  );
}

export default Review;
