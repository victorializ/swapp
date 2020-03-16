import React from 'react';
import { useFilter } from '../../hooks';
import Dropdown from './Dropdown';
import Range from './Range';

function Filter() {
    const { setFilm, setSpacies, options } = useFilter();
    return (
        <div className="filter">
            <Range caption="select birth year range" />
            <div className="dropdowns">
                <Dropdown name="films" caption="select episode" setValue={setFilm} options={options.films}/>
                <Dropdown name="species" caption="select character spacies" setValue={setSpacies} options={options.spacies} />
            </div>
        </div>
    )
}

export { Filter };