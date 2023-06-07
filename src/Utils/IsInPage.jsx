function isInPage(products, item) {
  return products.find((f) => f._id === item._id);
}

export { isInPage };
