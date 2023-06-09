import Toast from "../components/Toast";

function pageReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((f) => f._id !== payload)],
      };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist.filter((f) => f._id !== payload)],
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
        cart: [...state.cart.filter((f) => f._id !== payload._id)],
      };
    case "DECREMENT_QNTY":
      return {
        ...state,

        cartcount:
          [...state.cart].filter((f) => f.title === payload).length - 1,
      };
    case "INCREMENT_QNTY":
      return {
        ...state,
        cartcount:
          [...state.cart].filter((f) => f.title === payload).length + 1,
      };
  }
}
export { pageReducer };

/* <button onClick={()=>{setCart([...cart,item])}} >add to cart</button> */
// {cart:[],cart:[product1]}
//{cart:[product1],cart:[product2]....} (without ...state.cart)
//{cart:[product1,product2]}
