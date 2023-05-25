import { useNavigate } from "react-router-dom"
import "./Category.css"


function Category({cat}){
    const Navigate=useNavigate();
    return(
        <div className="Category-main-container" onClick={()=>Navigate(`/product/${cat.categoryName}`)}>
            <div className="Category-data-container">
                <img src={cat.imageUrl} alt="men" className="cat-img"/>
                <div className="Category-details">
                <h3>new arrival</h3>
                <h2>{cat.categoryName}</h2>
                <p>{cat.collectionName}</p>
                </div>
                
            </div>
        </div>
    )
}
export default Category