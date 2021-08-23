import axios from "axios";
import errorHandler from "./errorHandler";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
});

instance.interceptors.response.use((res) => res.data, errorHandler);

export default instance;
