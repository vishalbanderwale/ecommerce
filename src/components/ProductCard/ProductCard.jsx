import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css"
function ProductCard({item}) {
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
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </button>
      </div>
      <div className="product-card-nonmedia">
        <div className="product-card-details">
          <p className="brand">{item.brand}</p>
          <p>{item.title}</p>
          <p>${item.discountPrice}</p>
          <p style={{textDecoration:"line-through"}} className="actual-price">{item.price}</p>
          <p className="discount">({item.discount}%off)</p>
        </div>
        <div className="add-cart-btn">
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
