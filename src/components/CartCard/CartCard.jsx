import "./CartCard.css";

function CartCard() {
  return (
     <main>
      <div className="cart-header">
        <h3>my cart (0)</h3>
      </div>
<div className="cart-big-container">
      <div className="cart-main-container">
        <div className="cart-media-container">
          <img src="https://placehold.co/200x200" />
        </div>

        <div className="cart-detail-container">
          <div className="cart-title">
            {" "}
            <h4>name</h4>
          </div>

          <div className="cart-price">
            <p>price</p>
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
