import axios from "axios";
import { getTokenFromLocalStorage } from "../utils/localstorage";

export const API_URL = axios.create({
  baseURL: "https://localhost:4200/api",
  headers: {
    Authorization: `Bearer` + getTokenFromLocalStorage(),
  },
});
