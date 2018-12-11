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
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
