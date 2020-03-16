import { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';

const birthYearToNumber = birthYear => {
    const year = birthYear.match(/[0-9]+/g)[0];
    const era = birthYear.match(/[A-Za-z]+/g)[0];
    return era === 'BBY' ? year * (-1) : year;
}

const isInRange = (birthYear, min, max) => {
    const year = birthYearToNumber(birthYear);
    const moreThenMin = min === 'any' || year >= min;
    const lessThenMax = max === 'any' || year <= max;
    return moreThenMin && lessThenMax;
}

const isDefaultRange = (min, max) => min === 'any' && max === 'any';

const useFilter = () => {
    const [ state, setState, options ] = useContext(FilterContext);

    const setFilm = films => {
        setState(prevState => ({...prevState, films}));
    };

    const setSpacies = spacies => {
        setState(prevState => ({...prevState, spacies}));
    };

    const setBirthYearRange = (name, value) => {
        const data = value === 'BBY' || value === 'ABY' ? 'any' : birthYearToNumber(value);
        setState(prevState => ({...prevState, birthYear: {...prevState.birthYear, [name]: data}}));
    }

    const match = (films, spacies, birthYear) => {
        const matchFilm = state.films === 'any' || films.includes(state.films);
        const matchSpacies = state.spacies === 'any' || spacies.includes(state.spacies);
        const matchYear = birthYear === "unknown" ? 
            isDefaultRange(state.birthYear.min, state.birthYear.max) :
            isInRange(birthYear, state.birthYear.min, state.birthYear.max);
        return matchFilm && matchSpacies && matchYear;
    };

    return { setFilm, setSpacies, setBirthYearRange, match, options };
}

export { useFilter };




