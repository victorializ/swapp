import React, { useState } from 'react';

import { useFilter } from '../../../hooks';

import styles from './styles.module.scss';

function YearRange({ caption }) {
    return (
        <div className={styles.range}>
            <p className={styles.caption}>
                {caption}
            </p>
            <div className={styles.inputs}>
                <DataInput name="min" caption="from" />
                <DataInput name="max" caption="to" />
            </div>
        </div>
    )
}

function DataInput({ name, caption }) {
    const { setBirthYearRange } = useFilter();
    const [ value, setValue ] = useState('');
    const [ era, setEra ] = useState('BBY');

    return (
        <div className={styles.input}>
            <label htmlFor={name}>
                {caption}
            </label>
            <input 
                type="number" 
                id={name} name={name} 
                min={0} max={1000} 
                onChange={({target}) => {
                    setValue(target.value);
                    setBirthYearRange(name, `${value}${era}`);
                }}
            />
            <select 
                name="from" 
                onChange={({target}) => {
                    setEra(target.value);
                    setBirthYearRange(name, `${value}${era}`);
                }}
            >
                <option value="BBY">BBY</option>
                <option value="ABY">ABY</option>
            </select>
        </div>
    )
}
export { YearRange };