import { useContext } from "react";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { WishlistContext } from "../../Contexts/WishlistContext";

function WishlistPage() {
  const { wishlistState } = useContext(WishlistContext);
  const { wishlist } = wishlistState;

  return (
    <div>
      {wishlist.map((m) => (
        <WishlistCard item={m} key={m._id} />
      ))}
    </div>
  );
}
export default WishlistPage;
