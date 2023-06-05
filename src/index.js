import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { FilterProvider } from "./Contexts/filterContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { CartProvider } from "./Contexts/CartContext";
import { WishlistProvider } from "./Contexts/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistProvider>
        <CartProvider>
          <AuthProvider>
            <FilterProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </FilterProvider>
          </AuthProvider>
        </CartProvider>
      </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
