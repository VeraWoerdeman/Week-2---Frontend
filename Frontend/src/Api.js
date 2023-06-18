import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4001/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status <= 210;
  },
});

export default api;
