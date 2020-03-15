import React from 'react';
import { useRequest } from '../../../hooks';

function Dropdown({name, caption, setValue}) {
    const [ data, loading, error ] = useRequest(name);
    const onChange = ({target: {value}}) => setValue(value);

    return (
        <div>
            <label htmlFor={name}>{caption}</label>
            { loading ? <p>Loading...</p> :
                <select id={name} onChange={onChange}>
                <option value="any">---</option>
                { 
                    data.map(element => <option key={element.url} value={element.name || element.title}>
                        {element.name || element.title}
                    </option>) 
                }
                </select>
            }
        </div>
    )
}

export { Dropdown };