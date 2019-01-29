import React, { Component } from 'react';
import Recipie from './recipie';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipie 
        title="Pasta" 
        ingr={['Flour','Water']}
        img="spaghetti.jpeg" 
        instructions="Mix all incredients"/>
      </div>
    );
  }
}

export default App;
