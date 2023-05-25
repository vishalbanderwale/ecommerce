import "./Banner.css"
import { Link } from "react-router-dom"
function Banner(){
    return(
        <div className="banner-container">
            <div className="banner-media">
            <img src="https://images-static.nykaa.com/uploads/fcf40cb3-e07b-4fee-b827-bdf4dfc0f8c9.jpg?tr=w-1200,cm-pad_resizess" alt="picture" className="banner-img"/>
            </div>

<div className="shop-now-container">

<Link className="shop-now-link" to="/product"><button>
    shop now</button></Link>

</div>
        </div>
      
            
       
    )
}
export default Banner