/* eslint-disable react/prop-types */
function ReviewTabs({ tabs, tabIndex, setTabIndex }) {
  return (
    <div className="review_tabs">
      {
        tabs.map((tab, index) => (
          <div key={tab.id} className={tabIndex === index ? 'active' : ''}>
            <button onClick={() => setTabIndex(index)} className="review_btn" type="button">
              {tab.title}
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default ReviewTabs;
