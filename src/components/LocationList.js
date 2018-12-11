import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {
    const arrayToWeatherLocations = cities => (
        cities.map(city => <WeatherLocation 
                                key={city} 
                                city={city} 
                                onWeatherLocationClick={ () => onSelectedLocation(city) }
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