import { Routes,Route } from "react-router-dom";
import LandingPage from "../pages/Landingpage/Landingpage";
import ProductListing from "../pages/Productlisting/Productlisting";
import CartListingPage from "../pages/CartListingpage/CartListingpage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
function Routing(){
    return(
        <div>
            <Routes>
            <Route path="/"  element={<LandingPage/>}/>
            <Route path="/product"  element={<ProductListing/>}/>
            <Route path="/cart"  element={<CartListingPage/>}/>
            <Route path="/wishlist"  element={<WishlistPage/>}/>
            <Route path="/login"  element={<LoginPage/>}/>
            <Route path="/signup"  element={<SignupPage/>}/>
            <Route path="/product/:categoryid"  element={<ProductListing/>}/>
            </Routes>
        </div>
    )
}
export default Routing