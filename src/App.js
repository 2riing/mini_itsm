import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Board from "./pages/board";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/board" element={Board} />
      </Routes>
    </div>
  );
}

export default App;
