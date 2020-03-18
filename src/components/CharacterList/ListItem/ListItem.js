import React from 'react';
import { Link } from 'react-router-dom';

import { useFilter } from '../../../hooks';

import styles from './styles.module.scss';

function ListItem({ name, birthYear, species, films }) {
    const { match } = useFilter();

    return (
        match(films, species, birthYear) &&
            <Link to={`/character/${name}`}>
                <li className={styles.listItem}>
                    {name}
                </li>
            </Link>
    );
}

export { ListItem };