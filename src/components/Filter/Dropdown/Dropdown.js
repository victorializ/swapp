import React from 'react';

import Loader from '../../Loader';
import ErrorHandler from '../../ErrorHandler';

import styles from './styles.module.scss';

function Dropdown({ name, caption, value, setValue, options }) {

    const [ data, loading, error ] = options;
    
    return (
        <div className={styles.dropdown}>
            {error ? <ErrorHandler error = { error } /> :
                <>
                    <Loader loading={loading} />
                    <label 
                        htmlFor={name} 
                        className={styles.caption}
                    >
                        {caption}
                    </label>
                    <select 
                        id={name} 
                        value={value}
                        onChange={({target: {value}}) => setValue(value)}
                    >
                        <option value=''>
                            ---
                        </option>
                        { 
                            data?.map(element => 
                                <option 
                                    key={element.url} 
                                    value={element.name || element.title}
                                >
                                    {element.name || element.title}
                                </option>
                            ) 
                        }
                    </select>
                </>
            }
        </div>
    )
}

export { Dropdown };