import "./WishlistCard.css"

function WishlistCard(){
    return(
      <main>
       <div className="wishlist-header">
       <h3>my wishlist(0)</h3>
       </div>
        <div className="wishlist-main-container">
            <div className="wishlist-card-container">
            <div className="wishlist-card-media">
            <img src="https://placehold.co/200x200" />
            <div className="wishlist-card-nonmedia">
                <div className="wishlist-card-title">
                    <h4>name</h4>

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
    )
}

export default WishlistCard