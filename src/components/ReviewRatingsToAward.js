/* eslint-disable react/prop-types */
function ReviewRatingsToAward({ items }) {
  const nItems = Array.isArray(items) ? items.length : 0;
  if (nItems < 1) {
    return <span>There are no reviews to be awarded</span>;
  }
  return (
    <table>
      <tr>
        <th>The name of service</th>
        <th>Price</th>
        <th>Seller</th>
        <th>Date completed</th>
        <th>options</th>
      </tr>
      {items.map((item) => (
        <tr key={item.transactionId}>
          <td>{item.service}</td>
          <td>{item.price}</td>
          <td>{item.seller}</td>
          <td>{item.completed}</td>
          <td><button type="button">Rate Now</button></td>
        </tr>
      ))}
    </table>
  );
}

export default ReviewRatingsToAward;
