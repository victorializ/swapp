import axios from 'axios';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://swapi.co/api/',
  responseType: 'json'
});

const BASEURL = 'https://swapi.co/api/';
const get = path => axios.get(`${path}`);

export { get, BASEURL };