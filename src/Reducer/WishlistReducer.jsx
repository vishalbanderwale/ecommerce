function wishlistReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_WISHLIST":
      console.log("add");
      return { ...state, wishlist: [...state.wishlist, payload] };
  }
}

export { wishlistReducer };
