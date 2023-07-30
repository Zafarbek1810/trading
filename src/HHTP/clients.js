import axios from "axios";

export const API_URL = "https://inlisting.io/io/backend";
export const IMG_URL = "https://inlisting.io/";
// export const API_URL = "http://91.200.148.144:8000/";

const client = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

  client.interceptors.request.use((config) => {
    if (config.headers === undefined) {
      config.headers = {}
    }
    config.headers={
      "Content-Type": "application/json",
        Accept: "application/json",
      }
    return config;
    }
  )

// client.interceptors.request.use((config) => {
//   if (config.headers === undefined) {
//     config.headers = {}
//   }
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
//   return config;
// })
// client.interceptors.response.use((config) => {
//   return config;
// }, (error) => {
//   if (error.response.status === 401) {
//     localStorage.removeItem("token");
//     throw error;
//   }
//   throw error;
// })

export default client;