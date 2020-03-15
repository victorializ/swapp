import { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';

const useFilter = () => {
    const [ state, setState ] = useContext(FilterContext);

    const setFilm = film => {
        setState(prevState => ({...prevState, film}));
    };

    const setSpacies = spacies => {
        setState(prevState => ({...prevState, spacies}));
    };

    const match = (films, spacies, birthYear) => {
        const matchFilm = state.films === "any" || films.includes(state.films);
        const matchSpacies = state.spacies === "any"|| spacies.includes(state.spacies);
        return matchFilm && matchSpacies;
    };

    return { setFilm, setSpacies, match };
}

export { useFilter };




