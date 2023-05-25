import "./Filters.css";
function Filters() {
  return (
    <div className="filter-main-container">
        
      <div className="filter-header">
        <h3>filters</h3>
        <p>clear all</p>
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
        <input type="range" name="rangeInput" className="range" />
      </div>
      <div className="filter-category">
        <h3>category</h3>
        <div className="men-container">
          <input type="checkbox" name="men" id="men" />
          <label>men</label>
        </div>
        <div className="women-container">
          <input type="checkbox" name="women" id="women" />
          <label>wommen</label>
        </div>
        <div className="kids-container">
          <input type="checkbox" name="kids" id="kids" />
          <label>kids</label>
        </div>
      </div>
      <div className="filter-rating">
        <h3>rating</h3>
        <div>
          <input type="radio" name="rating" id="4star" />
          <label>4 star & above</label>
        </div>
        <div>
          <input type="radio" name="rating" id="3star" />
          <label>3 star & above</label>
        </div>
        <div>
          <input type="radio" name="rating" id="2star" />
          <label>2 star & above</label>
        </div>
        <div>
          <input type="radio" name="rating" id="1star" />
          <label>1 star & above</label>
        </div>
      </div>
      <div className="filter-sort">
        <h3>sort by</h3>
        <div className="high-to-low">
          <input type="radio" name="sort" id="h2l" />
          <label>price-high to low</label>
        </div>
        <div className="low-to-high">
          <input type="radio" name="sort" id="l2h" />
          <label>price-low to high</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
