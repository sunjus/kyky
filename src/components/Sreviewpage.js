import React, { useState } from 'react';
import data from '../data_for_review';
import ReviewPendingReveiw from './ReviewPendingReviews';
import ReviewMyReviews from './ReviewMyReviews';
import ReviewRatingsToAward from './ReviewRatingsToAward';
import './Sreviewpage.css';

const tabInfo = [
  {
    title: 'Ratings to Award(to Sellers)',
    id: 'toAward',
    content: (items) => <ReviewRatingsToAward items={items} />,
  },
  {
    title: 'Pending reviews',
    id: 'pending',
    content: (items) => <ReviewPendingReveiw items={items} />,
  },
  {
    title: 'My Ratings(as Buyer)',
    id: 'myratings',
    content: (items) => <ReviewMyReviews items={items} />,
  },
];

function Sreviewpage() {
  const [currentTab, setCurrentTab] = useState(0);
  const { reviewList } = data;
  return (
    <div className="reviewpage_container">
      <div className="tab_container">
        {
          tabInfo.map((t, i) => (
            <button key={t.id} className={currentTab === i ? 'active' : 'disable'} onClick={() => setCurrentTab(i)} type="button">
              {t.title}
            </button>
          ))
        }
      </div>
      <div className="review_container">
        { currentTab === 0 && <ReviewRatingsToAward items={reviewList.toAward} />}
        { currentTab === 1 && <ReviewPendingReveiw items={reviewList.pending} />}
        { currentTab === 2 && <ReviewMyReviews items={reviewList.myratings} />}
      </div>
    </div>
  );
}

export default Sreviewpage;
