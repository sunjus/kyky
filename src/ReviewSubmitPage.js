import React from 'react';
import './ReviewSubmitPage.css';

function ReviewSubmitPage() {
  return (
    <div className="reviewsubmit">
      <div className="reviewsubmit-container">
        <div className="reviewsubmit-container title">
          <h3>Rate User - User Name</h3>
        </div>
        <div className="reviewsubmit-container form">
          <form>
            <div className="job_title">job_title</div>
            <div className="board">
              <ul>
                <li>1. Service as request</li>
                <li>2. Service on time</li>
                <li>3. Service with care</li>
              </ul>
              <div className="myrating">⭐</div>
            </div>
            <div className="experience">
              <input type="text" placeholder="Please share your experience" />
            </div>
            <div className="submit_button">
              <button type="submit" className="submit_btn">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewSubmitPage;
