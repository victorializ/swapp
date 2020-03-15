import React from 'react';
import { Link } from 'react-router-dom';
import { useFilter } from '../../../hooks';

function ListItem({name, birthYear, species, films}) {
    const { match } = useFilter();
    return (
        match(films, species, birthYear) &&
            <li>
                <Link to={`/character/${name}`}>
                    {name}
                </Link>
            </li>
    )
}

export { ListItem };