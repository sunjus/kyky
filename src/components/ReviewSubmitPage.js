import React, { useState } from 'react';
import './ReviewSubmitPage.css';
import starEmpty from '../assets/star_empty.png';
import starFull from '../assets/star_full.png';

/* eslint-disable react/prop-types */
function ReviewRateWithStar({ nstar = 5, rate, setRate }) {
  const stars = Array.from(Array(nstar), (_, i) => i + 1);
  if (rate === 10) {
    setRate(1);
  }
  return (
    <span>
      {stars.map((v) => (
        <button type="button" key={v} onClick={() => setRate(v)}>
          <img src={(v > rate) ? starEmpty : starFull} alt={`rate ${v}`} />
        </button>
      ))}
    </span>
  );
}

/* eslint-disable react/no-array-index-key */
function ReviewSubmitPage() {
  const [rates, setRates] = useState([2, 3, 5]);
  const setRateAt = (index) => (value) => {
    setRates(
      (preRates) => [...preRates.slice(0, index), value, ...preRates.slice(index + 1)],
    );
  };
  return (
    <div className="reviewsubmit">
      <div className="reviewsubmit-container">
        <div className="reviewsubmit-container title">
          <h3>Rate User - User Name</h3>
        </div>
        <div className="reviewsubmit-container form">
          <form>
            <div className="job_title">
              <h3>Job Name</h3>
              <h4>Frontend Developer</h4>
            </div>
            <div className="board">
              <div className="myrating">
                <h4>Service as request</h4>
                <ReviewRateWithStar rate={rates[0]} setRate={setRateAt(0)} />
              </div>
              <div className="myrating">
                <h4>Service on time</h4>
                <ReviewRateWithStar rate={rates[1]} setRate={setRateAt(1)} />
              </div>
              <div className="myrating">
                <h4>Service with care</h4>
                <ReviewRateWithStar rate={rates[2]} setRate={setRateAt(2)} />
              </div>
            </div>
            <div className="debug-panel">
              {rates.map((v, i) => (
                <div key={i}>
                  Rate
                  {i}
                  :
                  {v}
                </div>
              ))}
            </div>
            <div className="experience">
              <h3>Describe your experience</h3>
              <input type="text" placeholder="" className="experience_textarea" />
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
