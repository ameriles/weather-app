import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    temperature: 25,
    humidity: 10,
    weatherState: 'normal',
    wind: '25m/s'
};

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

    renderForecastItemsDays() {
        return days.map(day=><ForecastItem weekDay={day} hour={10} data={data}/>);
    }

    renderProgress() {
        return 'Cargando pronostico extendido';
    }

    render() {
        const {city} = this.props;
        return (<div>
            <h2>Pronóstico Extendido para {city}</h2>
            {
                this.state.forecastData 
                    ? this.renderForecastItemsDays()
                    : this.renderProgress()
            }
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;