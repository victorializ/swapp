import React, { useState, createContext, useEffect } from 'react';

import { useRequest } from '../hooks';
import { isDataLoaded } from '../services/utils';

const initialData = {
  films: [], 
  species: [],
  characters: []
}

const DataContext = createContext(initialData);

const DataProvider = ({ children }) => {

  const [ state, setState ] = useState(initialData);
  const [ characters, charactersLoading, charactersError ] = useRequest('people', state.characters);
  const [ films, filmsLoading, filmsError ] = useRequest('films', state.films);
  const [ species, speciesLoading, speciesError ] = useRequest('species', state.species);   

  useEffect(() => {
    const areFilmsLoaded = isDataLoaded(films, filmsLoading, filmsError);
    const areSpeciesLoaded = isDataLoaded(species, speciesLoading, speciesError);
    if(areFilmsLoaded && areSpeciesLoaded && characters.length) {
      const formatedCharacters = characters.map(value => {
        const { name, birth_year, 
          species: speciesUrls, 
          films: filmsUrls } = value;
          const filmsTitles = filmsUrls?.map(url => {
            const { title } = films.find(value => value.url === url);
            return title;
          });
          const speciesNames = speciesUrls?.map(url => {
            const { name } = species.find(value => value.url === url);
            return name;
          });
          return {
            name, 
            birthYear: birth_year,
            species: speciesNames,
            films: filmsTitles
          };
      });
      setState(prevState => {
        const [ , loading, error ] = prevState.characters;
        return ({
          ...prevState, 
          characters: [
            formatedCharacters, 
            loading, 
            error
          ]
        });
      });
    }
  }, [characters, 
    films, filmsLoading, filmsError, 
    species, speciesLoading, speciesError
  ]);

  useEffect(() => {
    setState(prevState => ({
      ...prevState, 
        films: [
          films, 
          filmsLoading, 
          filmsError
        ]
      }));
  }, [filmsLoading, filmsError, films]);

  useEffect(() => {
    setState(prevState => ({
      ...prevState, 
      species: [
        species, 
        speciesLoading, 
        speciesError
      ]
    }));
  }, [species, speciesError, speciesLoading]);

  useEffect(() => {
    setState(prevState => {
      const [ characters ] = prevState.characters;
      return ({
        ...prevState,
        characters: [
          characters,
          charactersLoading,
          charactersError
        ]
      });
    });
  }, [charactersLoading, charactersError]);

  return (
    <DataContext.Provider value={state}>
      { children }
    </DataContext.Provider>);
};

export { DataContext, DataProvider };