import React, { useState, createContext } from 'react';

import { useRequest } from '../hooks';

const FilterContext = createContext([ {}, () => {}, {} ]);

const initialState = {
  films: 'any',
  spacies: 'any',
  birthYear: { min: 'any', max: 'any'}
};

const FilterProvider = ({ children }) => {
  const [ filter, setFilter ] = useState(initialState);
  const filmsOptions = useRequest('films');
  const spaciesOptions = useRequest('species');

  return (
    <FilterContext.Provider value={[filter, setFilter, 
      {films: filmsOptions, spacies: spaciesOptions}]}>
      { children }
    </FilterContext.Provider>);
};

export { FilterContext, FilterProvider };