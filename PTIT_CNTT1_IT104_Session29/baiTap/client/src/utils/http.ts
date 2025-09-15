import axios from "axios";

export const studentAPI = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
