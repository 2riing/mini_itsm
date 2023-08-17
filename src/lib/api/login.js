import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const constantUrl = "login";

const api = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_KEY,
  //   headers: {
  //     Authorization: `Bearer ${cookies.get("accessToken")}`,
  //   },
});

// Login
export async function loginAPI(data) {
try {
    console.log("login res", data);
    const res = await api.post(`${constantUrl}`, data);
    cookies.set(token, data);
    alert("로그인 되었습니다.");
    return res;
} catch (err) {  
    return err;
}
}
  