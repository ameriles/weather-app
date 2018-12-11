import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log(city);
    };
    
    const arrayToWeatherLocations = cities => (
        cities.map(city => <WeatherLocation 
                                key={city} 
                                city={city} 
                                onWeatherLocationClick={ () => handleWeatherLocationClick(city) }
                                />)
    );

    return (<div>
        {arrayToWeatherLocations(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;