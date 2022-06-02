/* eslint-disable react/prop-types */
function ReviewTabs({ tabs, changeTab }) {
  return (
    <>
      {
        tabs.map((tab) => (
          <div className="review_tabs" key={tab.id}>
            <button onClick={() => changeTab(tab.id)} classNane="review_btn" type="button">
              {tab.title}
            </button>
          </div>
        ))
      }
    </>
  );
}

export default ReviewTabs;
