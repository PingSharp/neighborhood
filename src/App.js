import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFancyComponent from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Map">
          <MyFancyComponent/>
        </div>
      </div>
    );
  }
}

export default App;
