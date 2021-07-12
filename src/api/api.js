import axios from "axios";
const axiosClient = axios.create();

const baseURL = "https://api.covid19api.com/summary";

const options = (method, url, data = null, headers = {}) => {
  const payload = {
    url,
    data,
    method,
    baseURL,
    withCredentials: true,
    headers: {
      ...headers,
    },
  };
  return payload;
};

export const instance = (method, url, data = null, headers = {}) => {
  return new Promise((resolve, reject) => {
    axiosClient(options(method, url, data, headers))
      .then((responce) => {        
        return resolve(responce);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
