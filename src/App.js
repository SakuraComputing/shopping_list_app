import React, { Component } from 'react';
import './styles/styles.css';
import Menu from './components/Menu';
import Shopping from './components/Shopping';
import AOLogoGreen from './styles/img/ao-header-logo.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="ao-header-logo" src={AOLogoGreen} alt="ao header logo"/>
          <div className="App-basket">Basket</div>
        </header>
        <Menu />
        <Shopping />
      </div>
    );
  }
}

export default App;
