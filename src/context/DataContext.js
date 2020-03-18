import React, { useState, 
  createContext, 
  useEffect } from 'react';

import { useRequest } from '../hooks';
import { isDataLoaded,
  formatCharacters } from '../services/characters';

const initialData = {
  films: [], 
  species: [],
  characters: []
}

const DataContext = createContext(initialData);

const DataProvider = ({ children }) => {
  const [ state, setState ] = useState(initialData);

  const [ characters, 
    charactersLoading, 
    charactersError 
  ] = useRequest('people', state.characters);

  const [ films, 
    filmsLoading, 
    filmsError 
  ] = useRequest('films', state.films);

  const [ species, 
    speciesLoading, 
    speciesError 
  ] = useRequest('species', state.species);   

  useEffect(() => {
    const areFilmsLoaded = isDataLoaded(films, filmsLoading, filmsError);
    const areSpeciesLoaded = isDataLoaded(species, speciesLoading, speciesError);

    if(areFilmsLoaded && areSpeciesLoaded && characters.length) {
      setState(prevState => {
        const [ , loading, error ] = prevState.characters;
        return ({
          ...prevState, 
          characters: [
            formatCharacters(characters, films, species), 
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