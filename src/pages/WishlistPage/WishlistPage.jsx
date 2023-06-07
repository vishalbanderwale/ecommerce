import { useContext } from "react";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { PageContext } from "../../Contexts/PageContext";

function WishlistPage() {
  const { pageState } = useContext(PageContext);
  const { wishlist } = pageState;

  return (
    <div>
      {wishlist.map((m) => (
        <WishlistCard item={m} key={m._id} />
      ))}
    </div>
  );
}
export default WishlistPage;
