import React, { Component } from 'react';
import RangeCalendar from './Calendar/RangeCalendar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Range Calendar</h1>
      <RangeCalendar />
      </div>
    );
  }
}

export default App;
