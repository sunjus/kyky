/* eslint-disable react/prop-types */
function ReviewTabs({ tabs, tabIndex, setTabIndex }) {
  return (
    <>
      {
        tabs.map((tab, index) => (
          <div className="review_tabs" key={tab.id} calss={tabIndex === index ? 'active' : ''}>
            <button onClick={() => setTabIndex(index)} className="review_btn" type="button">
              {tab.title}
            </button>
          </div>
        ))
      }
    </>
  );
}

export default ReviewTabs;
