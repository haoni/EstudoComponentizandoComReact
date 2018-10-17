import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MeuComponente from './components/meuComponente.js'
import MeuComponenteControlado from './components/meuComponenteControlado.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MeuComponente encrementText="Encrementar" dencrementText="Decrementar" initialValue={10}></MeuComponente>
          <br/>
          <MeuComponenteControlado></MeuComponenteControlado>
        </header>
      </div>
    );
  }
}

export default App;
