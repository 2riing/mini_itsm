import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home.js";
import Filter from "./pages/filter";
import Board from "./pages/board.js";
import ETC from "./pages/etc.js";
import Edit from "./components/board/edit.js";
import NewArticle from "./components/board/newArticle.js";
import BoardDetail from "./components/board/boardDetail";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/board" element={<Board />} />
        <Route path="/etc" element={<ETC />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<NewArticle />} />
        <Route path="/board/detail/:id" element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
