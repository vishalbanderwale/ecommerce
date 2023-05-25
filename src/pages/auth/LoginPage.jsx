import { Link } from "react-router-dom";
import "./LoginPage.css"
function LoginPage(){
    return(
        <div className="login-big-container">
        <div className="login-main-container">
            <div className="login-header">
               <h2>login</h2>
            </div>
            <div className="login-email-container">
                <label>Email address</label>
                <input name="email-address" placeholder="email@example.com"/>
            </div>
            <div className="login-password-container">
                <label>Password</label> 
                <input name="email-password" placeholder="....." />
            </div>
            <div className="password-container">
            <div className="login-remember-container">
                <input type="checkbox"  id="check-box"/>
                <label>Remember me</label>
            </div>
            <div className="forgot-password-container">
           <p>Forgot your password?</p>
            </div>

            </div>
            <div className="login-btn">
<button>Login</button>
            </div>
            <div className="create-account-container">
         <Link className="create-account-link" >create new account</Link>
            </div>
         
        </div>
        </div>
    )
}
export default LoginPage