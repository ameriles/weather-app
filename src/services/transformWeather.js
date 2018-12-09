import {
    SUNNY
} from './../constants/weathers';

const getWeatherState = (data) => {
    return SUNNY;
}

const transformWeather = (data) => {
    const {humidity, temp} = data.main;
    const {speed} = data.wind;
    const weatherState = getWeatherState(data);
    return {
        humidity,
        temperature: temp,
        wind: `${speed} m/s`,
        weatherState
    };
}

export default transformWeather;