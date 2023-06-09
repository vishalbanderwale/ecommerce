export const filterreducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY_FILTER":
      return { ...state, category: payload };
    case "PRICE_FILTER":
      return { ...state, price: payload };

    case "RATING_FILTER":
      return { ...state, rating: payload };
    case "SORT_FILTER":
      return { ...state, sort: payload };
    case "CLEAR_ALL":
      return {
        ...state,
        category: "All",
        price: 5000,
        rating: 0,
        sort: "",
      };
    default:
      return state;
  }
};
