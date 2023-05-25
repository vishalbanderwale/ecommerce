
import Filters from "../../components/Filters/Filters";
import { useContext } from "react";
import { Context } from "../../Contexts/searchContext/searchContext";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Productlisting.css";
function ProductListing() {
const{data}=useContext(Context);

  return (
    <div>
        
      <div className="productcard-main-container">

       <div className="filter">
       <Filters />
       </div>
        <div className="product-main">
        <div className="products">
            <h2>product list</h2>
            <div className="product-cart-list">
       
          {data.map((m) => (
            <ProductCard item={m} />
          ))}
        </div>
        </div>
        </div>
        
      </div>
  
    </div>
  );
}
export default ProductListing;
