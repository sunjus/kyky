import React, { useState } from 'react';
import data from '../data_for_review';
import ReviewTabs from './ReviewTabs';
import ReviewRatingsToAward from './ReviewRatingsToAward';
import ReviewPendingReviews from './ReviewPendingReviews';
import ReviewMyReviews from './ReviewMyReviews';
import './ReviewPage.css';

const tabsData = [
  {
    title: 'Ratings to Award (to sellers)',
    id: 'toAward',
  },
  {
    title: 'Pending Ratings',
    id: 'pending',
  },
  {
    title: 'My Ratings (as buyer)',
    id: 'myratings',
  },
];

function Reviewpage() {
  const [tabId, setTabId] = useState('toAward');
  // take data from static js file while dev
  const { reviewList } = data;
  return (
    <div className="reviewpage">
      <div className="review_title">
        <h3>Reviews.Feedback</h3>
      </div>
      <div className="review_container">
        <ReviewTabs tabs={tabsData} changeTab={setTabId} />
      </div>
      <div className="review_contents">
        {tabId === 'toAward' && <ReviewRatingsToAward items={reviewList[tabId]} />}
        {tabId === 'pending' && <ReviewPendingReviews items={reviewList[tabId]} />}
        {tabId === 'myratings' && <ReviewMyReviews items={reviewList[tabId]} />}
      </div>
    </div>
  );
}

export default Reviewpage;
