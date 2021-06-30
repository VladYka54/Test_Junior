import axios from "axios";
import { urlAPI as baseURL } from "../store/Constants";
const axiosClient = axios.create();

const options = (method, url, data = null, headers = {}) => {
  const payload = {
    url,
    data,
    method,
    baseURL,
    withCredentials: false,
    headers: {
      'X-Access-Token': '*',
      'Access-Control-Allow-Origin': '*',
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
