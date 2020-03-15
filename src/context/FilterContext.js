import React, { useState, createContext } from 'react';

const FilterContext = createContext([ {}, () => {} ]);

const initialState = {
    films: "any",
    spacies: "any",
    year: "any"
};

const FilterProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <FilterContext.Provider value={[state, setState]}>
      { children }
    </FilterContext.Provider>);
};

export { FilterContext, FilterProvider };