import React from 'react';

import ListItem from './ListItem';
import Loader from '../Loader';
import ErrorHandler from '../ErrorHandler';
import { useCharacter } from '../../hooks';

import styles from './styles.module.scss';

function CharacterList() {
    const [ characters, loading, error ] = useCharacter();
    return (
        <div className={styles.list}>
            {error ? <ErrorHandler error={error} /> :
                <>
                    <ol>
                        { characters.map(character => 
                            <ListItem key={character.name} {...character} />) }
                    </ol>
                    <Loader loading={loading} />
                </>
            }
        </div>
    )
}

export { CharacterList };