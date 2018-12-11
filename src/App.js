import React, { Component } from 'react';
import LocationList from './components/LocationList'
import {Grid, Row, Col} from 'react-flexbox-grid';
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
      // <Grid>
      //   <Row>
      //     <Col xs={12} sm={6} md={4} lg={3}>
      //       <div className="red"></div>
      //     </Col>
      //     <Col xs={12} sm={6} md={4} lg={3}>
      //       <div className="green"></div>
      //     </Col>
      //     <Col xs={12} sm={6} md={4} lg={3}>
      //       <div className="blue"></div>
      //     </Col>
      //     <Col xs={12} sm={6} md={4} lg={3}>
      //       <div className="yellow"></div>
      //     </Col>
      //   </Row>
      // </Grid>
      <div className="App">
        <LocationList cities={cities}
                      onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    );
  }
}

export default App;
