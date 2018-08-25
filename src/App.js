import React, { Component } from 'react';
import './styles/styles.css';
import Menu from './components/Menu';
import Shopping from './components/Shopping'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Shopping List</h1>
        </header>
        <Menu />
        <Shopping />
      </div>
    );
  }
}

export default App;
