import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginLable, setLoginLable] = useState("login");

  const cookies = new Cookies();

  // 쿠키 삭제
  const logout = () => {
    cookies.remove('accessToken', {path : '/'})
    setIsLogin(false);
    alert("로그아웃 되었습니다")
  }

  useEffect(() => {
    if (cookies.get("accessToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    
  }, [])

  useEffect(() => {
    if(isLogin) setLoginLable("Logout");
    else setLoginLable("Login");
  }, [isLogin])

  return (
    <div className="navbar">
      <div className="none">
        <Link to="/" className="nav_item">
          <img
            className="nav-logo"
            src="./so.png"
            style={{ paddingTop: "10px" }}
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/filter" className="nav_item">
            DataFilter
          </Link>
        </li>
        <li>
          <Link to="/board" className="nav_item">
            Board
          </Link>
        </li>
        <li>
          {isLogin?   
          <Link 
            to="/" 
            className="nav_item"
            onClick={logout}
          >
            Logout
          </Link> :        
          <Link to="/login" className="nav_item">
            Login
          </Link>}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
