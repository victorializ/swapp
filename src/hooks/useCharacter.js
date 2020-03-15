import { useContext, useEffect, useState } from 'react';

import { get, BASEURL } from '../services/http-client';
import { CharacterContext } from '../context/CharacterContext';
import { useRequest } from '../hooks';

const getCharacters = async url => {
  const { data } = await get(url);
  const results = await Promise.all(data?.results.map(formatChracterData));
  return { data: { results, next: data?.next} };
}

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

const useCharacter = () => {
    const [ state, setState ] = useContext(CharacterContext);
    const [ data, loading, error ] = useRequest('people', state, getCharacters);
    const [ cache, setCache ] = useState({data, loading, error});

    useEffect(() => {
      let cansel = false;
      setState(data);
      if(!cansel) setCache({data, loading, error});
      return () => cansel = true;
    }, [data]);

  return [ cache.data, cache.loading, cache.error ];
}

export { useCharacter };