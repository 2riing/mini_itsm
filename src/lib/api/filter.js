import axios from "axios";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();
const constantUrl = "filter";

const api = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_KEY,
  //   headers: {
  //     Authorization: `Bearer ${cookies.get("accessToken")}`,
  //   },
});

// Login
export async function filterByDateAPI(startDate, endDate) {
try {
    const res = await api.get(`${constantUrl}/${startDate}/${endDate}`);
    console.log("filter res :", res);
    return res;
} catch (err) {  
    return err;
}
}
  