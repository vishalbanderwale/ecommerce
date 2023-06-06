import { createContext, useReducer } from "react";
import { wishlistReducer } from "../Reducer/WishlistReducer";
export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  return (
    <div>
      |
      <WishlistContext.Provider value={{ wishlistDispatch, wishlistState }}>
        {" "}
        {children}
      </WishlistContext.Provider>
    </div>
  );
}

export { WishlistProvider };
