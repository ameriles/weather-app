import React, { Component } from 'react';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended';
import {Grid, Row, Col} from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';


const cities = [
  "Buenos Aires,ar",
  "San Miguel de Tucumán,ar",
  "San Salvador de Jujuy,ar",
  "Phoenix,us",
  "San Francisco,us"
];

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });
  };

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
                          onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <div className="details">
              {
                city ? <ForecastExtended city={city}/> : <div>No se seleccionó ciudad</div>
              }
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
