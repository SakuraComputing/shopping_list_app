import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shopping from './components/Shopping'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Shopping List Application</h1>
        </header>
        <Shopping />
      </div>
    );
  }
}

export default App;
