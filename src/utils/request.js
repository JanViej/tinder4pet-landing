import axios from 'axios';
import { getToken, deleteToken } from '.';

const TIME_OUT = 30000;
const request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/client`,
  timeout: TIME_OUT,
  withCredentials: true,
});

export const setInitHeader = () => {
  // const timestamp = Date.now();
  // const key = crypto
  //   .createHash('md5')
  //   .update(`${timestamp}_LAIDEPTRAI`)
  //   .digest('hex');
  if (process.browser) {
    const token = getToken();
    if (token) {
      request.defaults.headers.common.authorization = `Bearer ${token}`;
      // request.defaults.headers.common.timestamp = timestamp;
      // request.defaults.headers.common.key = key;
    }
  }
  request.interceptors.request.use(
    (config) => 
      // eslint-disable-next-line
      // config.headers.timestamp = timestamp;
      // eslint-disable-next-line
      // config.headers.key = key;
       config
    ,
    (error) => Promise.reject(error?.response || error.message),
  );
};

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      deleteToken()
    }
    return Promise.reject(error?.response?.data)
  },
);

export default request;
