import axios from 'axios';

const BASEURL = 'https://swapi.co/api/';
const get = path => axios.get(`${path}`);

export { 
  get, 
  BASEURL 
};