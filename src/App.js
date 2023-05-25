import "./App.css";
import logo from "./logo.png";
import  NavBar  from "./components/Nav Bar/NavBar";

import Routing from "./Router/Router";
function App() {
  return (
    <div className="App">
    < NavBar/>
     <Routing/>
    </div>
    
  );
}

export default App;
