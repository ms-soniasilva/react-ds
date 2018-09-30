import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItens : [
        "Home",
        "About us",
        "Join Us",
        "Contact us"
      ]
    };
   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navbar NavbarItens={this.state.NavItens}></Navbar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
