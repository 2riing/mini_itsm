import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const constantUrl = "search";

const api = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_KEY,
  headers: {
    Authorization: `Bearer ${cookies.get("accessToken")}`,
  },
});

// Search
export async function filterAPI(query, page, startDate, endDate) {
  try {
    const res = await api.get(
      `${constantUrl}?query=${query}&page=${page}&startDate=${startDate}&endDate=${endDate}`
    );
    console.log("filter/search res :", res);
    return res;
  } catch (err) {
    return err;
  }
}
