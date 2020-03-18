import { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';
import { matchFilm,
    matchBirthYear,
    matchSpecies } from '../services/utils';

const useFilter = () => {
    const [ state, setState ] = useContext(FilterContext);

    const setFilm = films => {
        setState(prevState => ({
            ...prevState, 
            films
        }));
    };

    const setSpecies = species => {
        setState(prevState => ({
            ...prevState, 
            species
        }));
    };

    const setBirthYearRange = (name, year, era) => {
        setState(prevState => ({
            ...prevState, 
            birthYear: {
                ...prevState.birthYear, 
                [name]: { 
                    year, 
                    era 
                }
            }
        }));
    }

    const match = (films, species, birthYear) => {
        const isFilmMatches = matchFilm(films, state.films);
        const isSpeciesMatches = matchSpecies(species, state.species);
        const isBirthYearMatches = matchBirthYear(birthYear, state.birthYear);
        return isFilmMatches && isSpeciesMatches && isBirthYearMatches;
    };

    return { 
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




