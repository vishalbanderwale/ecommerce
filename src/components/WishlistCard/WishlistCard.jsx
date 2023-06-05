import "./WishlistCard.css";

function WishlistCard({ item }) {
  return (
    <main>
      <div className="wishlist-header">
        <h3>wishList:{item.length}</h3>
      </div>
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
                <button>remove from wishlist</button>
              </div>
              <div className="add-cart-btn">
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WishlistCard;
