import React from 'react';

const Location = (props) => {
    // object destructuring
    const { city } = props;
    
    return (
        <h1>{city}</h1>
    );
};

export default Location;