export const filterreducer = (state, { type, payload }) => {
  switch (type) {
    case "PRICE_FILTER":
      return { ...state, price: payload };

    case "RATING_FILTER":
      return { ...state, rating: payload };
    case "SORT_FILTER":
      return { ...state, sort: payload };
    case "CLEAR_ALL":
      return {
        ...state,
        category: {
          men: false,
          women: false,
          kids: false,
        },
        price: 5000,
        rating: 0,
        sort: "",
      };
    default:
      return state;
  }
};
