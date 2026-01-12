import axios, { AxiosInstance } from "axios";

// const url: string = "http://localhost:4000";
const url: string = "https://userproject.loftyapps.online";

const instancePro: AxiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instancePro;
