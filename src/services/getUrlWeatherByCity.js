import {api_key, base_url} from './../constants/api_weather';

const getUrlWeatherByCity = city => {
    return `${base_url}?q=${city}&appid=${api_key}&units=metric`;
}

export default getUrlWeatherByCity;