import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    SUNNY,
    FOG
} from '../../../constants/weathers';

import './styles.css';

const icons = {
    [SUNNY]: "day-sunny",
    [FOG]: "day-fog"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return icon;
    else
        return "na";
};

const WeatherTemperature = ({temperature, weatherState}) => {
    const iconSize = "2x";
    return (
        <div className="weather-temperature-container">
            <WeatherIcons name={getWeatherIcon(weatherState)} size={iconSize} />
            <span className="temperature-value">{temperature}</span>
            <span className="temperature-type">°C</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;