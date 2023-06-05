import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLogged, SetIsLogged] = useState(false);
  const token = localStorage.getItem("Token");
  const [userDetails, SetUserDetails] = useState({
    cartList: [],
    wishList: [],
    firstName: "",
  });

  useEffect(() => {
    if (token) {
      SetIsLogged(true);
    }
  }, [isLogged]);

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    SetIsLogged(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        SetIsLogged,
        userDetails,
        SetUserDetails,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
