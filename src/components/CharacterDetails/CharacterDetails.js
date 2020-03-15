import React from 'react';
import { useParams } from 'react-router-dom';

import { useCharacter } from '../../hooks';

function CharacterDetails() {
    const { name } = useParams();
    const [ characters ] = useCharacter();
    const { birthYear, species, films } = characters.find(character => character.name === name);
    
    return (
        <>
            <h1>{name}</h1>
            <p>Born: {birthYear}</p>
            <p>Species</p>
            <ul>
                { species.map(species => <li key={species}>{species}</li>) }
            </ul>
            <p>Films</p>
            <ul>
                { films.map(film => <li key={film}>{film}</li>) }
            </ul>
        </>
    );
}

export { CharacterDetails };