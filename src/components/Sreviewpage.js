import React, { useState } from 'react';
import './Sreviewpage.css';

const TabInfo = [
  {
    title: 'Ratings to Award(to Sellers)',
    id: 'toAward',
  },
  {
    title: 'Pending reviews',
    id: 'pending',
  },
  {
    title: 'My Ratings(as Buyer)',
    id: 'myratings',
  },
];

function Sreviewpage() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="tab_container">
      {
        TabInfo.map((t, i) => (
          <button key={t.id} className={currentTab === i ? 'active' : 'disable'} onClick={() => setCurrentTab(i)} type="button">
            {t.title}
          </button>
        ))
      }
    </div>
  );
}

export default Sreviewpage;
