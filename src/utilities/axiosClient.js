import axios from 'axios';
import {baseURL} from "./api"

const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default axiosClient