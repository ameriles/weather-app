import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList'

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
      <div className="App">
        <LocationList cities={cities}
                      onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    );
  }
}

export default App;
