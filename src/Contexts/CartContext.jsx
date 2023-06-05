import { createContext, useReducer } from "react";
import { cartReducer } from "../Reducer/CartReducer";
export const CartContext = createContext();
function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });
  return (
    <div>
      <CartContext.Provider value={{ cartState, cartDispatch }}>
        {" "}
        {children}
      </CartContext.Provider>
    </div>
  );
}
export { CartProvider };
