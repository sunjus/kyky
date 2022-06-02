import React, { useState } from 'react';
import './ReviewPage.css';
import data from '../data_for_review';
import ReviewRatingsToAward from './ReviewRatingsToAward';

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentIndex,
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

function Reviewpage() {
  const { contentIndex, contentItem, contentChange } = useTabs(0, data.contents);

  return (
    <div className="reviewpage">
      <div className="review_title">
        <h3>Reveiws.Feedback</h3>
      </div>
      <div className="review_container">
        {data.contents.map((section, index) => (
          <div className="review_tabs" key={section.tab}>
            <button onClick={() => contentChange(index)} classNane="review_btn" type="button">
              {section.tab}
            </button>
          </div>
        ))}
      </div>
      <div className="review_contents">
        {contentIndex === 0 && <ReviewRatingsToAward items={contentItem.items} />}
      </div>
    </div>
  );
}

export default Reviewpage;
