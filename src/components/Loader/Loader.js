import React from 'react';

import styles from './styles.module.scss';

function Loader({ loading }) {
    return(
        loading && 
            <p className={styles.loading}>
                Loading...
            </p>
    )
};

export { Loader };