import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const get = (query) => {
  const request = axios.get(baseUrl + query);
  return request
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(`Error response status: ${error.response.status}`);
        console.log(`Error message data: `, error.response.data);
        console.log(`Error response headers: `, error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(`Error Request:`, error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(`Error config: `, error.config);
    });
};

const create = (query: string, newTicket: Ticket) => {
  const request = axios.post(baseUrl + query, newTicket);
  return request
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(`Error response status: ${error.response.status}`);
        console.log(`Error message data: `, error.response.data);
        console.log(`Error response headers: `, error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(`Error Request:`, error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(`Error config: `, error.config);
    });
};

const update = (query, newObject) => {
  const request = axios.put(`${baseUrl}/${query}`, newObject);
  return request
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(`Error response status: ${error.response.status}`);
        console.log(`Error message data: `, error.response.data);
        console.log(`Error response headers: `, error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(`Error Request:`, error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(`Error config: `, error.config);
    });
};

export default {
  get,
  create,
  update,
};
