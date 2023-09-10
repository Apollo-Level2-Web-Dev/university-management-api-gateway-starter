import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseUrl: string): AxiosInstance => {
  console.log(baseUrl);
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Define request interceptors
  instance.interceptors.request.use(
    (config) => {
      // Add any custom logic before sending the request
      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Define response interceptors
  instance.interceptors.response.use(
    (response) => {
      // Handle successful responses
      return response.data;
    },
    (error) => {
      // Handle error responses
      if (error.response) {
        // The request was made, but the server responded with an error status code
      } else if (error.request) {
        // The request was made, but no response was received
      } else {
        // Something happened in setting up the request that triggered an error
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const AuthHttpService = HttpService(config.authServiceUrl);
const CoreHttpService = HttpService(config.coreServiceUrl);
const PaymentHttpService = HttpService(config.paymentServiceUrl);

export { AuthHttpService, HttpService, CoreHttpService, PaymentHttpService };
