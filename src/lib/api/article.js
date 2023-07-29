import axios from "axios";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();
const constantUrl = "posts";

const api = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_KEY,
  //   headers: {
  //     Authorization: `Bearer ${cookies.get("accessToken")}`,
  //   },
});

export async function getArticlesAPI() {
  try {
    const res = await api.get(`${constantUrl}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getArticleAPI(data) {
  try {
    const res = await api.get(`${constantUrl}/${data}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function postArticleAPI(data) {
  try {
    const res = await api.post(`${constantUrl}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function putArticleAPI(data) {
  try {
    const res = await api.put(`${constantUrl}/${data}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteArticleAPI(data) {
  try {
    const res = await api.delete(`${constantUrl}/${data}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
