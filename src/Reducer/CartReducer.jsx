function cartReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
  }
}
export { cartReducer };

/* <button onClick={()=>{setCart([...cart,item])}} >add to cart</button> */
// {cart:[],cart:[product1]}
//{cart:[product1],cart:[product2]....} (without ...state.cart)
//{cart:[product1,product2]}
