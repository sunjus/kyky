/* eslint-disable react/prop-types */
function ReviewPendingReviews({ items }) {
  const nItems = Array.isArray(items) ? items.length : 0;
  if (nItems < 1) {
    return <span>You have no pending reviews</span>;
  }
  // TODO
  return (
    <table>
      <tr>
        <th>The name of service</th>
        <th>Price</th>
        <th>Buyer</th>
        <th>Order date</th>
      </tr>
      {items.map((item) => (
        <tr key={item.transactionId}>
          <td>{item.service}</td>
          <td>{item.price}</td>
          <td>{item.buyer}</td>
          <td>{item.date}</td>
        </tr>
      ))}
    </table>
  );
}

export default ReviewPendingReviews;
