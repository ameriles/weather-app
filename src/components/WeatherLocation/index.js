import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const {city} = props;

        this.state = {
            city
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
        const api_url = getUrlWeatherByCity(this.state.city);
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
                {
                    data ?
                        <WeatherData data={data} /> :
                        <CircularProgress/>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;