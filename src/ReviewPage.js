import React, { useState } from 'react';
import Review from './Review';

const content = [
  {
    tab: 'Ratings to Award (to sellers)',
    emptyMsg: 'There are no reviews to be awarded',
  },
  {
    tab: 'Pending Ratings',
    emptyMsg: 'You have no pending reviews',
  },
  {
    tab: 'My Ratings (as buyer)',
    emptyMsg: 'You have no reviews',
    reviews: [],
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

function Reviewpage() {
  const { contentItem, contentChange } = useTabs(0, content);
  const reviewList = contentItem.reviews;
  const nReviews = reviewList ? reviewList.length : 0;
  return (
    <div className="reviewpage">
      <div className="review_title">
        <h3>Reveiws.Feedback</h3>
      </div>
      <div className="review_container">
        {content.map((section, index) => (
          <div className="review_tabs" key={section.tab}>
            <button onClick={() => contentChange(index)} classNane="review_btn" type="button">
              {section.tab}
            </button>
          </div>
        ))}
      </div>
      <div className="review_contents">
        {nReviews === 0
          ? contentItem.emptyMsg
          : reviewList.map((review) => <Review data={review} key={review.index} />)}
      </div>
    </div>
  );
}

export default Reviewpage;
