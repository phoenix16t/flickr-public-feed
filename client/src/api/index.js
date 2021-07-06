import axios from 'axios';

export const searchApi = (payload) => {
  return axios.get('http://localhost:1234/public-feed', payload);
};
