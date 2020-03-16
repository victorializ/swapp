import React from 'react';

import ListItem from './ListItem';
import Loader from '../Loader';
import { useCharacter } from '../../hooks';

function CharacterList() {
    const [ characters, loading, error ] = useCharacter();
    return (
        <div className="character-list">
            <ol>
                {characters.map(character => <ListItem key={character.name} {...character} />)}
            </ol>
            <Loader loading={loading} />
        </div>
    )
}

export { CharacterList };