import { useContext } from "react";
import "./WishlistCard.css";
import { PageContext } from "../../Contexts/PageContext";
import { useNavigate } from "react-router-dom";

import { isInPage } from "../../Utils/IsInPage";
function WishlistCard({ item }) {
  const navigate = useNavigate();
  const { pageDispatch, pageState } = useContext(PageContext);

  return (
    <main>
      <div className="wishlist-main-container">
        <div className="wishlist-card-container">
          <div className="wishlist-card-media">
            <img src={item.imageUrl} className="wishlist-img" alt="wishlist" />
            <div className="wishlist-card-nonmedia">
              <div className="wishlist-card-title">
                <h4>{item.title}</h4>
              </div>
              <div className="wishlist-card-price">
                <p>$1200</p>
              </div>
              <div className="remove-wishlist-btn">
                <button
                  onClick={() => {
                    pageDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item._id,
                    });
                  }}
                >
                  remove from wishlist
                </button>
              </div>
              <div className="add-cart-btn">
                <button
                  onClick={() => {
                    isInPage(pageState.cart, item)
                      ? navigate("/cart")
                      : pageDispatch({ type: "ADD_TO_CART", payload: item });
                  }}
                >
                  {isInPage(pageState.cart, item)
                    ? "go to cart"
                    : "add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WishlistCard;
