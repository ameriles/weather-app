import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { api_url } from './../../constants/api_weather';
import {
    FOG
} from './../../constants/weathers';

const dataJujuy = {
    temperature: 25,
    humidity: 80,
    wind: "10 m/s",
    weatherState: FOG
};

class WeatherLocation extends Component {
    constructor() {
        console.log("constructor");
        super();
        this.state = {
            city: "San Salvador de Jujuy",
            data: dataJujuy
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateWeather();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    handleUpdateWeather = () => {
        fetch(api_url).then((response) => {
            return response.json();
        }).then((data) => {
            const newWeatherData = transformWeather(data);
            console.log(newWeatherData);
            this.setState({
                city: data.name,
                data: newWeatherData
            });
        });
    }

    render() {
        console.log("render");

        const {city, data} = this.state;
        return (
            <div>
                <Location city={city}/>
                <WeatherData data={data} />
                <button type="button" onClick={this.handleUpdateWeather}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;