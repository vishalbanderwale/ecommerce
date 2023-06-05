import { useContext } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { CartContext } from "../../Contexts/CartContext";

function CartListingPage() {
  const { cartState } = useContext(CartContext);
  const cartvarible = cartState.cart;
  console.log(cartvarible);
  return (
    <div>
      {cartvarible.map((m) => (
        <CartCard item={m} />
      ))}
    </div>
  );
}
export default CartListingPage;
