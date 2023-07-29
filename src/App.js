import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home.js";
import Filter from "./pages/filter";
import Board from "./pages/board.js";
import ETC from "./pages/etc.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/board" element={<Board />} />
        <Route path="/etc" element={<ETC />} />
      </Routes>
    </div>
  );
}

export default App;
