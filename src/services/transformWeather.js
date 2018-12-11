import {
    SUNNY,
    RAIN,
    CLOUD,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weathers';

const getWeatherState = (weather) => {
    const {id} = weather;
    if (id < 300)
        return THUNDER;
    
    if (id < 400)
        return DRIZZLE;
    
    if (id < 600)
        return RAIN;

    if (id < 700)
        return SNOW;
    
    if (id === 800)
        return SUNNY;

    return CLOUD;
}

const transformWeather = (data) => {
    const {humidity, temp} = data.main;
    const {speed} = data.wind;
    const weatherState = getWeatherState(data.weather[0]);
    return {
        humidity,
        temperature: temp,
        wind: `${speed} m/s`,
        weatherState
    };
}

export default transformWeather;