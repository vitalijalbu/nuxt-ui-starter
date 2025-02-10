import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    "Content-Type": "application/json",
  },
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const { jwt } = getSession();
//     if (jwt) {
//       config.headers.Authorization = `Bearer ${jwt}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       removeSession();
//     }
//     return Promise.reject(error);
//   }
//);
