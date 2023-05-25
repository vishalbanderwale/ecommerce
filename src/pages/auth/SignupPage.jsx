import { Link } from "react-router-dom";
import "./SignupPage.css";
function SignupPage() {
  return (
    <div className="signup-big-container">
      <div className="signup-main-container">
        <div className="signup-header">
          <h2>signup</h2>
        </div>
        <div className="signup-name-container">
          <label>your name</label>
          <input
            name="signup-name"
            placeholder="enter first name and last name"
            id="input-name"
          />
        </div>
        <div className="signup-email-container">
          <label>email address</label>
          <input
            name="email-address"
            id="input-email-address"
            placeholder="email@example.com"
          />
        </div>

        <div className="signup-password-container">
          <label>password</label>
          <input name="password" id="input-password"placeholder="...." />
        </div>
        <div className="confirm-password-container">
          <label>confirm password</label>
          <input name="confirm-password" id="confirm-password" placeholder="...." />
        </div>
        <div className="signup-terms-condition">
          <input type="checkbox" id="terms" name="terms-condition" />
          <label>I accept all Terms & Condition</label>
        </div>
        <div className="create-account-btn">
          <button>create account button</button>
        </div>
        <div className="already-account-container">
          <Link className="already-account-link">already have an account</Link>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
