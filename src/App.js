import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import Filter from "./pages/Filter.js";
import Login from "./pages/Login.js";
import Board from "./pages/Board.js";
import Edit from "./components/board/Edit";
import NewArticle from "./components/board/NewArticle.js";
import BoardDetail from "./components/board/BoardDetail";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<NewArticle />} />
        <Route path="/board/:id" element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
