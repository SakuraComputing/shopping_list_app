import React, { Component } from 'react';
import './styles/styles.css';
import Menu from './components/Menu';
import Shopping from './components/Shopping';
import AOLogoGreen from './styles/img/ao-header-logo.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="ao-header-logo" src={AOLogoGreen} alt="ao header logo"/>
        <header className="App-header">
            <div className="header-grid">
              <div className="header-grid-icon"><ion-icon name="compass"></ion-icon></div> 
              <small className="header-grid-text">Track Your Order</small>
              <div className="header-grid-item">
                <input type="text" 
                        className="header-grid-search" 
                        placeholder="Search for Products, Brands or Advice" 
                        autoComplete="off"
                  />
                  <ion-icon class="header-grid-search-icon" name="search"></ion-icon>
              </div>
              <div className="MyAccount">
                <ion-icon class="header-grid-person-icon" name="person"></ion-icon>
                <div className="header-grid-item">My Account </div>
                <small> Register | Login</small>
              </div>
              <div className="basket-icon header-grid-icon"><ion-icon name="basket"></ion-icon></div>
              <div className="App-basket header-grid-item-basket">Basket</div>
            </div>
          </header>
          <Menu />
          <Shopping />
      </div>
    );
  }
}

export default App;
