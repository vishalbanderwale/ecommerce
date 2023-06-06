import { useContext } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { CartContext } from "../../Contexts/CartContext";

function CartListingPage() {
  const { cartState } = useContext(CartContext);
  const { cart } = cartState;

  return (
    <div>
      <h3>cart:{cart.length}</h3>
      {cart.map((m) => (
        <CartCard item={m} key={m._id} />
      ))}
      <div className="price-cart-container">
        <div className="price-cart-header">
          <p>price card details</p>
        </div>
        <div className="item-price">
          <p>price</p>
          <p>$1200</p>
        </div>
        <div className="discount-price">
          <p>-780$</p>
        </div>
        <div className="delivery-price">
          <p>free</p>
        </div>
        <div className="cart-total-amount">
          <p>totalAmount</p>
        </div>
        <div className="price-save-msg">
          <p>you will save upto $1250 on this order</p>
        </div>
        <div className="primary-btn">
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}
export default CartListingPage;
