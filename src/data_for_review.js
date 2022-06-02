const contents = [
  {
    tab: 'Ratings to Award (to sellers)',
    emptyMsg: 'There are no reviews to be awarded',
    items: [
      {
        transactionId: 0,
        service: 'Pet sitter',
        seller: 'Claudia',
        completed: 'n/a',
        price: 18,
      },
    ],
  },
  {
    tab: 'Pending Ratings',
    emptyMsg: 'You have no pending reviews',
  },
  {
    tab: 'My Ratings (as buyer)',
    emptyMsg: 'You have no reviews',
    reviews: [],
  },
];

export default { contents };
