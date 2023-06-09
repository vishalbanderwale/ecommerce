import { useCallback, useContext } from "react";
import "./CartCard.css";
import { PageContext } from "../../Contexts/PageContext";
import { useNavigate } from "react-router-dom";

import { isInPage } from "../../Utils/IsInPage";

function CartCard({ item }) {
  const navigate = useNavigate();
  const { pageDispatch, pageState, cartcount } = useContext(PageContext);

  return (
    <main>
      <div className="cart-header"></div>
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
              <button
                onClick={() => {
                  pageDispatch({ type: "DECREMENT_QNTY", payload: item.title });
                }}
              >
                -
              </button>
              <span>{pageState.cartcount}</span>
              <button
                onClick={() => {
                  pageDispatch({ type: "INCREMENT_QNTY", payload: item.title });
                }}
              >
                +
              </button>
            </div>
            <div className="wishlist-btn">
              <button
                onClick={() => {
                  pageDispatch({
                    type: "MOVE_TO_WISHLIST",
                    payload: item,
                  });
                }}
              >
                move to wishlist
              </button>
            </div>
            <div className="remove-cart-btn">
              <button
                onClick={() => {
                  pageDispatch({ type: "REMOVE_FROM_CART", payload: item._id });
                }}
              >
                remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartCard;
