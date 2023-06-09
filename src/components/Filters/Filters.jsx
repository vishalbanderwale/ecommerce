import { useContext } from "react";
import "./Filters.css";
import { FilterContext } from "../../Contexts/filterContext";
import { useNavigate, useParams } from "react-router-dom";

function Filters() {
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useContext(FilterContext);
  const { price, rating, sort } = filterState;
  const { categoryid } = useParams();
  function handlerCategory(event, name) {
    filterDispatch({ type: "CATEGORY_FILTER", payload: event });
    navigate(`/product/${name}`);
  }
  function handlerClear() {
    filterDispatch({ type: "CLEAR_ALL" });
    navigate("/product");
  }

  return (
    <div className="filter-main-container1">
      <div className="filter-container">
        <div className="filter-main-container">
          <div className="filter-header">
            <h3>filters</h3>
            <p onClick={() => handlerClear()}>clear all</p>
          </div>
          <div className="filter-price">
            <h3>price</h3>
            <div className="price-range">
              <span>1000</span>
              <span>2000</span>
              <span>3000</span>
              <span>4000</span>
              <span>5000</span>
            </div>
            <input
              type="range"
              min="1000"
              max="5000"
              step="1000"
              className="price-slider"
              value={price}
              onChange={(e) =>
                filterDispatch({
                  type: "PRICE_FILTER",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div className="filter-category">
            <h3>category</h3>
            <div className="men-container">
              <input
                type="checkbox"
                name="Men"
                id="men"
                checked={"MenWatches" === categoryid}
                onChange={(event) =>
                  handlerCategory(event.target.name, "MenWatches")
                }
              />
              <label>men</label>
            </div>
            <div className="women-container">
              <input
                type="checkbox"
                name="Women"
                id="women"
                checked={"WomenWatches" === categoryid}
                onChange={(event) =>
                  handlerCategory(event.target.name, "WomenWatches")
                }
              />
              <label>women</label>
            </div>
            <div className="kids-container">
              <input
                type="checkbox"
                name="kids"
                id="kids"
                checked={"Kid'sWatches" === categoryid}
                onChange={(event) =>
                  handlerCategory(event.target.name, "Kid'sWatches")
                }
              />
              <label>kids</label>
            </div>
          </div>
          <div className="filter-rating">
            <h3>rating</h3>
            <div>
              <input
                type="radio"
                name="rating"
                id="4star"
                checked={rating === 4}
                onChange={() =>
                  filterDispatch({ type: "RATING_FILTER", payload: 4 })
                }
              />
              <label>4 star & above</label>
            </div>
            <div>
              <input
                type="radio"
                name="rating"
                id="3star"
                checked={rating === 3}
                onChange={() =>
                  filterDispatch({ type: "RATING_FILTER", payload: 3 })
                }
              />
              <label>3 star & above</label>
            </div>
            <div>
              <input
                type="radio"
                name="rating"
                id="2star"
                checked={rating === 2}
                onChange={() =>
                  filterDispatch({ type: "RATING_FILTER", payload: 2 })
                }
              />
              <label>2 star & above</label>
            </div>
            <div>
              <input
                type="radio"
                name="rating"
                id="1star"
                checked={rating === 1}
                onChange={() =>
                  filterDispatch({ type: "RATING_FILTER", payload: 1 })
                }
              />
              <label>1 star & above</label>
            </div>
          </div>
          <div className="filter-sort">
            <h3>sort by</h3>
            <div className="high-to-low">
              <input
                type="radio"
                name="sort"
                id="h2l"
                checked={sort === "HIGH_TO_LOW"}
                onClick={() =>
                  filterDispatch({
                    type: "SORT_FILTER",
                    payload: "HIGH_TO_LOW",
                  })
                }
              />
              <label>price-high to low</label>
            </div>
            <div className="low-to-high">
              <input
                type="radio"
                name="sort"
                id="l2h"
                checked={sort === "LOW_TO_HIGH"}
                onClick={() =>
                  filterDispatch({
                    type: "SORT_FILTER",
                    payload: "LOW_TO_HIGH",
                  })
                }
              />
              <label>price-low to high</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
