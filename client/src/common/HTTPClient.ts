import axios from "axios";
import { API_KEY, BASE_URL } from "./constants/";

const HTTPClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    Authorization: API_KEY,
  },
});

export default HTTPClient;
