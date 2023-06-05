import { useContext } from "react";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { WishlistContext } from "../../Contexts/WishlistContext";

function WishlistPage() {
  const { wishlistState } = useContext(WishlistContext);
  const wishlistvariable = wishlistState.wishlist;
  return (
    <div>
      {wishlistvariable.map((m) => (
        <WishlistCard item={m} />
      ))}
    </div>
  );
}
export default WishlistPage;
