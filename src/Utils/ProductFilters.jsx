


export const PriceFilteredData = (products, price) => {
  return products.filter((f) => f.discountPrice <= price);
};
export const RatingFilteredData = (products, rating) => {
  return products.filter((f) => Number(f.rating) >= Number(rating));
};
export const SortedFilteredData = (products, sort) => {
  if (sort === "HIGH_TO_LOW") {
    return [...products].sort(
      (a, b) => Number(b.discountPrice) - Number(a.discountPrice)
    );
  }

  if (sort === "LOW_TO_HIGH") {
    return [...products].sort(
      (a, b) => Number(a.discountPrice) - Number(b.discountPrice)
    );
  }
  return products;
};
