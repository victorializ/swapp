import React, { useState, createContext, useEffect } from 'react';
import { useCharacterRequest } from '../hooks/useCharacter';

const CharacterContext = createContext([]);

const CharacterProvider = ({ children }) => {
  const [ state, setState ] = useState([]);
  const [ data, loading, error ] = useCharacterRequest(state);

  useEffect(() => {
    setState(data)
  }, [data]);

  return (
    <CharacterContext.Provider value={[data, loading, error]}>
      { children }
    </CharacterContext.Provider>);
};

export { CharacterContext, CharacterProvider };