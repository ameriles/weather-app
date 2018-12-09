import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
    FOG
} from './../../constants/weathers';

const data = {
    temperature: 25,
    humidity: 80,
    wind: "10 m/s",
    weatherState: FOG
};

const WeatherLocation = () => (
    <div>
        <Location city={"San Salvador de Jujuy"}/>
        <WeatherData data={data} />
    </div>
);

export default WeatherLocation;