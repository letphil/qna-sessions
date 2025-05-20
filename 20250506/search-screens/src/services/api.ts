import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  console.log("api: request.use =", config);

  // try retrieve token from localStorage
  config.headers.Authorization = "TOKEN TOKEN";
  return config;
});

api.interceptors.response.use(
  async function (response) {
    console.log("api: response.use =", response);
    return response;
  },
  (error) => {
    try {
      console.error("error =", error);
      console.log("error.config =", error.config);

      const originalRequest = error.config;
      if ("retries" in originalRequest) {
        if (!originalRequest.retries) return Promise.reject("TOO MANY RETRIES");
        --originalRequest.retries;
      } else {
        originalRequest.retries = 10;
      }

      return api(originalRequest);
    } catch (error) {
      console.error("error =", error);
      return Promise.reject("TOO MANY RETRIES");
    }

    // alert("SOMETHING WENT WRONG");
  }
);

export default api;
