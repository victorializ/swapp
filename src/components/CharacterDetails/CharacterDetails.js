import React from 'react';
import { useParams } from 'react-router-dom';

import { useCharacter } from '../../hooks';

import styles from './styles.module.scss';

function CharacterDetails() {
    const { name } = useParams();
    const [ characters ] = useCharacter();
    const character = characters?.find(character => character.name === name);
    
    return (
        <div className={styles.details}>
            <h1>{name}</h1>
            <p className={styles.date}>
                Year of birth: {character?.birthYear}
            </p>
            <div className={styles.species}>
                <p>Species:</p>
                <ul>
                    { 
                        character?.species.map(species => 
                            <li key={species}>{species}</li>) 
                    }
                </ul>
            </div>
            <div className={styles.films}>
                <p>Films</p>
                <ul>
                    { character?.films.map(film => 
                        <li key={film}>{film}</li>) }
                </ul>
            </div>
        </div>
    );
}

export { CharacterDetails };