import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import SearchContext from "./Contexts/searchContext/searchContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SearchContext> 
        <App />
        </SearchContext>
     
      </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
