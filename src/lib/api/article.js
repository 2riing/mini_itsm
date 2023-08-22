import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const constantUrl = "board";

const api = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_KEY,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${cookies.get("accessToken")}`,
  },
});

// Article

export async function getArticlesAPI() {
  try {
    const res = await api.get(`${constantUrl}`);
    return res;
  } catch (err) {
    return err;
  }
}

export async function getArticleAPI(data) {
  try {
    const res = await api.get(`${constantUrl}/${data}`);
    return res;
  } catch (err) {
    return err;
  }
}

export async function postArticleAPI(data) {
  try {
    console.log("post res", data);
    const res = await api.post(`${constantUrl}`, data);
    return res;
  } catch (err) {
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

// Comment

export async function getCommentsAPI(postId) {
  try {
    const res = await api.get(`${constantUrl}/${postId}/cmt`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getCommentAPI(postId, cmtId) {
  try {
    const res = await api.get(`${constantUrl}/${postId}/cmt/${cmtId}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function postCommentAPI(data) {
  try {
    const req = { content: data.content };
    const res = await api.post(`${constantUrl}/${data.postId}/cmt`, req);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function putCommentAPI(postId, cmtId, data) {
  try {
    const res = await api.put(`${constantUrl}/${postId}/cmt/${cmtId}`, data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteCommentAPI(postId, cmtId) {
  try {
    const res = await api.delete(`${constantUrl}/${postId}/cmt/${cmtId}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
