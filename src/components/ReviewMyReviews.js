/* eslint-disable react/prop-types */
function ReviewMyReviews({ items }) {
  const nItems = Array.isArray(items) ? items.length : 0;
  if (nItems < 1) {
    return <span>You have no reviews</span>;
  }
  // TODO
  return (
    <table>
      <tr>
        <th>The name of service</th>
        <th>Classification</th>
        <th>Buyer</th>
        <th>Comment</th>
      </tr>
      {items.map((item) => (
        <tr key={item.transactionId}>
          <td>{item.service}</td>
          <td>{item.classification}</td>
          <td>{item.buyer}</td>
          <td>{item.comment}</td>
        </tr>
      ))}
    </table>
  );
}

export default ReviewMyReviews;
