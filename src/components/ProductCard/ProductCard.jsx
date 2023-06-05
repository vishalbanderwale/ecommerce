import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { WishlistContext } from "../../Contexts/WishlistContext";

function ProductCard({ item }) {
  const { cartDispatch, cartState } = useContext(CartContext);
  const { wishlistDispatch } = useContext(WishlistContext);
  // console.log(item);
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
              icon={faHeart}
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
            // onChange={console.log(cartState)}
            onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
