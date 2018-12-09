import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
    FOG, SUNNY
} from './../../constants/weathers';

const dataArray = [{
        temperature: 25,
        humidity: 80,
        wind: "10 m/s",
        weatherState: FOG
    },{
        temperature: 40,
        humidity: 20,
        wind: "0 m/s",
        weatherState: SUNNY
    }
];

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "San Salvador de Jujuy",
            data: dataArray[0]
        };
    }

    handleUpdateWeather = () => {
        console.log("actualizado");
        this.setState({
            city: "San Miguel de Tucumán",
            data: dataArray[1]
        });
    }

    render() {
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