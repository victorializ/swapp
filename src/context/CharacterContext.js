import React, { useState, createContext } from 'react';

const CharacterContext = createContext([ [], () => [] ]);

const CharacterProvider = ({ children }) => {
  const [state, setState] = useState([]);
  console.log(state);
  return (
    <CharacterContext.Provider value={[state, setState]}>
      { children }
    </CharacterContext.Provider>);
};

export { CharacterContext, CharacterProvider };