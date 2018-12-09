import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weather-extra-info-container">
        <span>{`H: ${humidity}% - `}</span>
        <span>{`V: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;