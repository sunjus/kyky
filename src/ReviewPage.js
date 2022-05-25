import React, { useState } from 'react';
import './ReviewPage.css';

const content = [
  {
    tab: 'Ratings to Award (to sellers)',
    content: 'There are no reviews to be awarded',
  },
  {
    tab: 'Pending Ratings',
    content: 'You have no pending reviews',
  },
  {
    tab: 'My Ratings (as buyer)',
    content: 'You have no reviews',
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

function ReviewPage() {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <div className="review">
      <div className="review_title">
        <h3>Reviews/Feedback</h3>
      </div>
      <div className="review_container">
        {content.map((section, index) => (
          <div className="review_tabs" key={section.tab}>
            <button onClick={() => contentChange(index)} className="review_btn" type="button">{section.tab}</button>
          </div>
        ))}
      </div>
      <div className="review_contents">
        {contentItem.content}
      </div>
    </div>
  );
}

export default ReviewPage;
