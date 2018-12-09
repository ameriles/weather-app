import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`H: ${humidity}% - `}</span>
        <span>{`V: ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;