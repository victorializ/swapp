import React from 'react';
import Dropdown from './Dropdown';
import { useFilter } from '../../hooks';

function Filter() {
    const { setFilm, setSpacies } = useFilter();
    return (
        <>
            <Dropdown name="films" caption="Select episode" setValue={setFilm}/>
            <Dropdown name="species" caption="Select character spacies" setValue={setSpacies}/>
            {/*<Dropdown name="range" caption="Select renge of years"/>*/}
        </>
    )
}

export { Filter };