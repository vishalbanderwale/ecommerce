import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { FilterProvider } from "./Contexts/filterContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { CartProvider } from "./Contexts/PageContext";
import { WishlistProvider } from "./Contexts/PageContext";
import { PageProvider } from "./Contexts/PageContext";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <PageProvider>
        <AuthProvider>
          <FilterProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </FilterProvider>
        </AuthProvider>
      </PageProvider>
    </Router>
  </React.StrictMode>
);
