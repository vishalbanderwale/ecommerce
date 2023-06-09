import { useNavigate } from "react-router-dom";
import "./Category.css";
import { useContext } from "react";
import { FilterContext } from "../../Contexts/filterContext";

function Category({ cat }) {
  const navigate = useNavigate();
  const { filterDispatch } = useContext(FilterContext);

  function handlerCat(event) {
    filterDispatch({ type: "CATEGORY_FILTER", payload: event });
    navigate(`/product/${cat.categoryName}`);
  }
  return (
    <div
      className="Category-main-container"
      onClick={() => handlerCat(cat.category)}
    >
      <div className="Category-data-container">
        <img src={cat.imageUrl} alt="men" className="cat-img" />
        <div className="Category-details">
          <h3>new arrival</h3>
          <h2>{cat.categoryName}</h2>
          <p>{cat.collectionName}</p>
        </div>
      </div>
    </div>
  );
}
export default Category;
