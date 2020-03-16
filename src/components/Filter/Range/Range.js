import React, { useState, useEffect } from 'react';

import { useFilter } from '../../../hooks';

function Range({ caption }) {
    return (
        <div className="range">
            <p className="caption">{caption}</p>
            <div className="inputs">
                <DataInput name="min" />
                <DataInput name="max" />
            </div>
        </div>
    )
}

function DataInput({ name }) {
    const { setBirthYearRange } = useFilter();
    const [ value, setValue ] = useState('');
    const [ era, setEra ] = useState('BBY');
    const onChange = ({target: {value}}) => setValue(value);
    const onChangeEra = ({target: {value}}) => setEra(value);

    useEffect(() => {
        setTimeout(() => {
            setBirthYearRange(name, `${value}${era}`);
        }, 500);
    }, [value, era]);

    return (
        <div className="data-input">
            <label htmlFor={name}>{name}</label>
            <div>
                <input type="number" id={name} name={name} min={0} max={1000} onChange={onChange}/>
                <select name="from" onChange={onChangeEra}>
                    <option value="BBY">BBY</option>
                    <option value="ABY">ABY</option>
                </select>
            </div>
        </div>
    )
}
export { Range };