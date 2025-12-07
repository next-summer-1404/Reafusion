import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// for manage all Request
Api.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// for manage all Request finish
// for manage all Response
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorize !, you must login egain");
    }

    return Promise.reject(error);
  }
);
// for manage all Response finish

export default Api;