import React from 'react';

import ListItem from './ListItem';
import { useCharacter } from '../../hooks';

function CharacterList() {
    const [ characters, loading, error ] = useCharacter();
    return <>
        {
            error ? <p>{error}</p> : 
            <>
                <ol>
                    {characters.map(character => <ListItem key={character.name} {...character} />)}
                </ol>
                { loading && <p>Loading...</p> }
            </>
        }
    </>
}

export { CharacterList };