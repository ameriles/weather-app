import React from 'react';
import WeatherLocation from './WeatherLocation';

const arrayToWeatherLocations = cities => (
    cities.map((city) => <WeatherLocation city={city} />)
);

const LocationList = ({cities}) => (
    <div>
        {arrayToWeatherLocations(cities)}
    </div>
);

export default LocationList;