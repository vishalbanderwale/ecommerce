import { useCallback, useContext } from "react";
import "./CartCard.css";
import { CartContext } from "../../Contexts/CartContext";

function CartCard({ item }) {
  return (
    <main>
      <div className="cart-header">
        <h3>{item.length}</h3>
      </div>
      <div className="cart-big-container">
        <div className="cart-main-container">
          <div className="cart-media-container">
            <img src={item.imageUrl} className="cart-img" />
          </div>

          <div className="cart-detail-container">
            <div className="cart-title">
              {" "}
              <h4>{item.title}</h4>
            </div>

            <div className="cart-price">
              <p>{item.price}</p>
            </div>
            <div className="cart-quantity">
              <p>quantity:</p>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="wishlist-btn">
              <button>move to wishlist</button>
            </div>
            <div className="remove-cart-btn">
              <button>remove from cart</button>
            </div>
          </div>
        </div>

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
    </main>
  );
}

export default CartCard;
