import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';

export const api_key = '4e8471cf1925105f577ae112c003bd99';
export const base_url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const url_forecast = `${base_url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({
                    forecastData 
                });
            }
        )
    }

    renderForecastItemsDays(forecastData) {
        return forecastData.map(forecast =>
            <ForecastItem key={`${forecast.weekDay}_${forecast.hour}`}
                          weekDay={forecast.weekDay} 
                          hour={forecast.hour} 
                          data={forecast.data}/>);
    }

    renderProgress() {
        return 'Cargando pronostico extendido';
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (<div>
            <h2>Pronóstico Extendido para {city}</h2>
            {
                forecastData 
                    ? this.renderForecastItemsDays(forecastData)
                    : this.renderProgress()
            }
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;