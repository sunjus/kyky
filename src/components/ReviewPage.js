import React, { useState } from 'react';
import data from '../data_for_review';
import ReviewTabs from './ReviewTabs';
// use own component for each tab/list. It could be merged or share common component later.
import ReviewRatingsToAward from './ReviewRatingsToAward';
import ReviewPendingReviews from './ReviewPendingReviews';
import ReviewMyReviews from './ReviewMyReviews';
import './ReviewPage.css';

// tabsData should be static. If not "tabIndex" system need to be reviewed for that.
const tabsData = [
  {
    title: 'Ratings to Award (to sellers)',
    id: 'toAward',
    content: (items) => <ReviewRatingsToAward items={items} />,
  },
  {
    title: 'Pending Ratings',
    id: 'pending',
    content: (items) => <ReviewPendingReviews items={items} />,
  },
  {
    title: 'My Ratings (as buyer)',
    id: 'myratings',
    content: (items) => <ReviewMyReviews items={items} />,
  },
];

function Reviewpage() {
  const [tabIndex, setTabIndex] = useState(0);
  const currentTab = tabsData[tabIndex];
  // take data from static js file while dev
  const { reviewList } = data;
  return (
    <div className="reviewpage">
      <div className="review_title">
        <h3>Reviews.Feedback</h3>
      </div>
      <div className="review_container">
        <ReviewTabs tabs={tabsData} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </div>
      <div className="review_contents">
        {currentTab.content(reviewList[currentTab.id])}
      </div>
    </div>
  );
}

export default Reviewpage;
