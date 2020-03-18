import React, { useState, createContext } from 'react';

const initialState = {
  films: '',
  species: '',
  birthYear: { 
    min: {
      year: '', 
      era: 'BBY'
    }, 
    max: {
      year: '', 
      era: 'BBY'
    }
  }
};

const FilterContext = createContext([ initialState, () => {} ]);

const FilterProvider = ({ children }) => {
  const [ filter, setFilter ] = useState(initialState);
  
  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      { children }
    </FilterContext.Provider>);
};

export { FilterContext, FilterProvider };