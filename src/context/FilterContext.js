import React, { useState, createContext } from 'react';

const FilterContext = createContext([ {}, () => {}, {} ]);

const initialState = {
  films: 'any',
  species: 'any',
  birthYear: { min: 'any', max: 'any'}
};

const FilterProvider = ({ children }) => {
  const [ filter, setFilter ] = useState(initialState);

  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      { children }
    </FilterContext.Provider>);
};

export { FilterContext, FilterProvider };