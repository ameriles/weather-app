import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    SUNNY,
    FOG
} from '../../../constants/weathers';

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

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        <WeatherIcons name={getWeatherIcon(weatherState)} size="2x" />
        <span>{`${temperature}°C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;