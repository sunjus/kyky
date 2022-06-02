import React, { useState } from 'react';
import data from '../data_for_review';
import ReviewTabs from './ReviewTabs';
import ReviewRatingsToAward from './ReviewRatingsToAward';
import './ReviewPage.css';

/*
const useTabs = (initialTabId) => {
  const [tabId, setTabId] = useState(initialTabs);
  return {
    tabIndex,
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};
*/

const tabsData = [
  {
    title: 'Ratings to Award (to sellers)',
    emptyMsg: 'There are no reviews to be awarded',
    id: 'toAward',
  },
  {
    title: 'Pending Ratings',
    emptyMsg: 'You have no pending reviews',
    id: 'pending',
  },
  {
    title: 'My Ratings (as buyer)',
    emptyMsg: 'You have no reviews',
    id: 'myratings',
  },
];

function Reviewpage() {
  const [tabId, setTabId] = useState('toAward');

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
      </div>
    </div>
  );
}

export default Reviewpage;
