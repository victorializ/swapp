import { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';
import { 
    birthYearToNumber, 
    isBirthYearInRange, 
    isBirthYearInDefaultRange } from '../services/utils';

const useFilter = () => {
    const [ state, setState, options ] = useContext(FilterContext);

    const setFilm = films => {
        setState(prevState => ({...prevState, films}));
    };

    const setSpecies = species => {
        setState(prevState => ({...prevState, species}));
    };

    const setBirthYearRange = (name, value) => {
        const data = value === 'BBY' || value === 'ABY' ? 'any' : birthYearToNumber(value);
        setState(prevState => ({
                ...prevState, 
                birthYear: {
                    ...prevState.birthYear, 
                    [name]: data
                }
            })
        );
    }

    const match = (films, species, birthYear) => {
        const matchFilm = state.films === 'any' || films.includes(state.films);
        const matchSpecies = state.species === 'any' || species.includes(state.species);
        const matchYear = birthYear === 'unknown' ? 
            isBirthYearInDefaultRange(state.birthYear.min, state.birthYear.max) :
            isBirthYearInRange(birthYear, state.birthYear.min, state.birthYear.max);
        return matchFilm && matchSpecies && matchYear;
    };

    return { 
        options, 
        films: state.films, 
        setFilm, 
        species: state.species, 
        setSpecies,
        birthYear: state.birthYear, 
        setBirthYearRange, 
        match
    };
}

export { useFilter };




