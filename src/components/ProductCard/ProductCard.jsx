import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { WishlistContext } from "../../Contexts/WishlistContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const { cartDispatch, cartState } = useContext(CartContext);
  const { wishlistDispatch, wishlistState } = useContext(WishlistContext);
  const navigate = useNavigate();
  const isInCart = cartState.cart.find((f) => f._id === item._id);
  const isInWishlist = wishlistState.wishlist.find((f) => f.id === item._id);

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
              icon={isInWishlist ? faHeart : faHeartCrack}
              onClick={() => {
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item });
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
              isInCart
                ? navigate("/cart")
                : cartDispatch({ type: "ADD_TO_CART", payload: item });
            }}
          >
            {isInCart ? "go to cart" : "add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
