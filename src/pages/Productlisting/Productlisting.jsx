import { useContext } from "react";
import Filters from "../../components/Filters/Filters";

import ProductCard from "../../components/ProductCard/ProductCard";

import "./Productlisting.css";
import { ProductContext } from "../../Contexts/ProductContext";

import {
  PriceFilteredData,
  RatingFilteredData,
  SortedFilteredData,
} from "../../Utils/ProductFilters";
import { FilterContext } from "../../Contexts/filterContext";

function ProductListing() {
  const { dbData } = useContext(ProductContext);
  const {
    filterState: { price, rating, sort },
  } = useContext(FilterContext);

  const filteredPriceData = PriceFilteredData(dbData, price);
  const filteredRatingData = RatingFilteredData(filteredPriceData, rating);
  const filteredSortedData = SortedFilteredData(filteredRatingData, sort);
  const filteredData = filteredSortedData;
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
              {filteredData.map((m) => (
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
