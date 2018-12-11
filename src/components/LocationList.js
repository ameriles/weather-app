import React from 'react';
import WeatherLocation from './WeatherLocation';
const LocationList = () => (
    <div>
        <WeatherLocation city="San Salvador de Jujuy,ar"/>
        <WeatherLocation city="Rosario,ar"/>
        <WeatherLocation city="Buenos Aires,ar"/>
        <WeatherLocation city="Cordoba,ar"/>
        <WeatherLocation city="Ushuaia,ar"/>
    </div>
);

export default LocationList;