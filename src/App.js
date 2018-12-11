import React, { Component } from 'react';
import LocationList from './components/LocationList'
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
  
  handleSelectedLocation = city => {
    console.log(city);
  };

  render() {
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
            <div className="details"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
