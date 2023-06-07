import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css";
import { useContext } from "react";
import { PageContext } from "../../Contexts/PageContext";

import { useNavigate } from "react-router-dom";
import { isInPage } from "../../Utils/IsInPage";

function ProductCard({ item }) {
  const { pageDispatch, pageState } = useContext(PageContext);

  const navigate = useNavigate();

  return (
    <div className="product-card-container">
      <div className="product-card-media">
        <img
          src={item.imageUrl}
          alt="productcard-img"
          className="product-img"
        />
        <button className="heart-btn">
          <span>
            <FontAwesomeIcon
              icon={isInPage(pageState.wishlist, item) ? faHeart : faHeartCrack}
              onClick={() => {
                pageDispatch({ type: "ADD_TO_WISHLIST", payload: item });
              }}
            />
          </span>
        </button>
      </div>
      <div className="product-card-nonmedia">
        <div className="product-card-details">
          <p className="brand">{item.brand}</p>
          <p>{item.title}</p>
          <p>${item.discountPrice}</p>
          <p
            style={{ textDecoration: "line-through" }}
            className="actual-price"
          >
            {item.price}
          </p>
          <p className="discount">({item.discount}%off)</p>
        </div>
        <div className="add-cart-btn">
          <button
            onClick={() => {
              isInPage(pageState.cart, item)
                ? navigate("/cart")
                : pageDispatch({ type: "ADD_TO_CART", payload: item });
            }}
          >
            {isInPage(pageState.cart, item) ? "go to cart" : "add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

//start isIncart-false-onclick-dispatch
//true-isIncart-go-to-cart-navigate
