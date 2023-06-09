import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../../components/Toast";

function LoginPage() {
  const defaultData = {
    email: "",
    password: "",
  };
  const [loginData, setloginData] = useState(defaultData);
  const navigate = useNavigate();

  function handlerInput(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setloginData((prev) => ({ ...prev, [name]: value }));
    // console.log(loginData);
  }

  const handlerLogin = async () => {
    try {
      const Loginresponse = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      console.log(Loginresponse);
      if (Loginresponse.status === 200) {
        const loginResult = await Loginresponse.json();
        console.log(await loginResult);
        const { encodedToken } = await loginResult;
        localStorage.setItem("Token", encodedToken);
        setloginData(defaultData);

        navigate("/product");
        Toast({ message: "login successfull", type: "success" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  function handlersubmit(e) {
    e.preventDefault();
    handlerLogin();
  }

  return (
    <div className="login-big-container">
      <div className="login-main-container">
        <div className="login-header">
          <h2>login</h2>
        </div>
        <form onSubmit={handlersubmit}>
          <div className="login-email-container">
            <label>Email address</label>
            <input
              name="email"
              placeholder="email@example.com"
              onChange={handlerInput}
            />
          </div>
          <div className="login-password-container">
            <label>Password</label>
            <input
              name="password"
              placeholder="....."
              onChange={handlerInput}
            />
          </div>
          <div>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>

        <div className="create-account-container">
          <Link className="create-account-link">create new account</Link>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
