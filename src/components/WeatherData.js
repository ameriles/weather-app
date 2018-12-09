import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={25} weatherState={"fog"}/>
        <WeatherExtraInfo humidity={60} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;