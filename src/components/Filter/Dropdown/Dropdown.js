import React from 'react';

import Loader from '../../Loader';

function Dropdown({name, caption, setValue, options}) {
    const [ data, loading ] = options;
    const onChange = ({target: {value}}) => setValue(value);
    return (
        <div>
            <p className="caption">{caption}</p>
            <Loader loading={loading} />
            { loading ||
                <select id={name} onChange={onChange}>
                    <option value="any">any</option>
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