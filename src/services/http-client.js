import axios from 'axios';

const BASEURL = 'https://swapi.co/api/';
const get = path => axios.get(`${path}`);

const formatChracterData = async result => {
  const { name, birth_year, species: speciesUrls, films: filmsUrls } = result;
  const speciesRequests = speciesUrls.map(url => get(url));
  const species = await Promise.all(speciesRequests);
  const filmsRequests = filmsUrls.map(url => get(url));
  const films = await Promise.all(filmsRequests);
  return {
    name, 
    birthYear: birth_year, 
    species: species.map(value => value?.data.name), 
    films: films.map(value => value?.data.title)};
};

const getCharacters = async url => {
  const { data } = await get(url);
  const results = await Promise.all(data?.results.map(formatChracterData));
  return { data: { results, next: data?.next } };
}

export { 
  get, 
  getCharacters, 
  BASEURL 
};