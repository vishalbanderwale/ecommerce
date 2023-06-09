import { ToastContainer } from "react-toastify";
import "./App.css";

import NavBar from "./components/Nav Bar/NavBar";

import Routing from "./Router/Router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
