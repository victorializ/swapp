import React from 'react';

import Dropdown from './Dropdown';
import YearRange from './YearRange';
import { useFilter } from '../../hooks';

import styles from './styles.module.scss';

function Filter() {
    const { setFilm, setSpecies, options, films, species } = useFilter();
    return (
        <div className={styles.filter}>
            <YearRange caption="Select birth year range" />
            <Dropdown 
                name="films" 
                caption="Select episode" 
                value={films}
                setValue={setFilm} 
                options={options.films}
            />
            <Dropdown 
                name="species" 
                caption="Select character species" 
                value={species}
                setValue={setSpecies} 
                options={options.species} 
            />
        </div>
    )
}

export { Filter };