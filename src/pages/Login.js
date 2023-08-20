import React, { useState } from "react";
import "./Login.css";
import { loginAPI } from "../lib/api/login";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const postLogin = () => {
    if (!id) {
      alert("id를 입력해주세요");
      return;
    }
    if (!pw) {
      alert("pw를 입력해주세요");
      return;
    }
    const loginData = {
      id,
      pw,
    };
    loginAPI(loginData).then((res) => {
      // 로그인 토큰 저장
      console.log("login res :", res);
    });

    navigate(`/`);
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(e) => setId(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              onChange={(e) => setPw(e.target.value)}
            />
            <label>Password</label>
          </div>
          <a href="#" onClick={(e) => postLogin()}>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
