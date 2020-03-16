import React from 'react';
import { useParams } from 'react-router-dom';

import { useCharacter } from '../../hooks';

function CharacterDetails() {
    const { name } = useParams();
    const [ characters ] = useCharacter();
    const { birthYear, species, films } = characters?.find(character => character.name === name);
    
    return (
        <div className="details">
            <h1>{name}</h1>
            <p className="date">Year of birth: {birthYear}</p>
            <div className="species">
                <p>Species:</p>
                <ul>
                    { species.map(species => <li key={species}>{species}</li>) }
                </ul>
            </div>
            <div className="films">
                <p>Films</p>
                <ul>
                    { films.map(film => <li key={film}>{film}</li>) }
                </ul>
            </div>
        </div>
    );
}

export { CharacterDetails };