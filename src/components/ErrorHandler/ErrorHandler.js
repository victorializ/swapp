import React from 'react';

import styles from './styles.module.scss';

function ErrorHandler({ error }) {
    return (
        error && 
            <p className={styles.error}>
                {error.message}
            </p>
    )
};

export { ErrorHandler };