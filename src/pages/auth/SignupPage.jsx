import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { useState } from "react";

function SignupPage() {
  const defaultData = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setuserData] = useState(defaultData);

  const navigate = useNavigate();

  function handleInput(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value })); //name:email value:"vishal"
  }
  console.log(userData);

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (response.status === 201) {
        const responseResult = await response.json();
        console.log(responseResult);
        navigate("/login");
      }
    } catch (error) {
      console.log("not working");
      console.log(error);
    }
  };
  function handlersubmit(e) {
    e.preventDefault();
    handleSignup();
  }

  return (
    <div className="signup-big-container">
      <div className="signup-main-container">
        <div className="signup-header">
          <h2>signup</h2>
        </div>
        <form onSubmit={handlersubmit}>
          <div className="signup-name-container">
            <label>your name</label>
            <input
              name="name"
              placeholder="enter first  name and last name"
              id="input-name"
              onChange={handleInput}
            />
          </div>
          <div className="signup-email-container">
            <label>email address</label>
            <input
              name="email"
              id="input-email-address"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>

          <div className="signup-password-container">
            <label>password</label>
            <input
              name="password"
              id="input-password"
              placeholder="...."
              onChange={handleInput}
            />
          </div>

          <div className="create-account-btn">
            <button type="submit">create account </button>
          </div>
        </form>
        <div className="already-account-container">
          <Link className="already-account-link">already have an account</Link>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
