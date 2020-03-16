import React from 'react';

function Loader({loading}) {
    return(
        loading && <p>Loading...</p>
    )
};

export { Loader };