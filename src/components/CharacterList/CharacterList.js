import React, { useContext } from 'react';

import ListItem from './ListItem';
import Loader from '../Loader';
import ErrorHandler from '../ErrorHandler';
import { DataContext } from '../../context/DataContext';

import styles from './styles.module.scss';

function CharacterList() {
    const { 
        characters: [ 
            characters, loading, error 
        ]} = useContext(DataContext);

    return (
        <div className={styles.list}>
            {error ? <ErrorHandler error={error} /> :
                <>
                    <ol>
                        { characters?.map(character => 
                            <ListItem key={character.name} {...character} />) }
                    </ol>
                    <Loader loading={loading} />
                </>
            }
        </div>
    )
}

export { CharacterList };