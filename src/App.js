import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  changeColor(e) {
    window.chrome.tabs.executeScript(null, { code: "document.body.style.backgroundColor='" + e.target.id + "'" });
  }

  render() {
    return (
      <div className="App" style={{ minWidth: '400px' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Chrome Extension</h1>
        </header>
        <div className="App-intro">
          <div className="item" id="red" onClick={this.changeColor.bind(this)}>red</div>
          <div className="item" id="blue" onClick={this.changeColor.bind(this)}>blue</div>
          <div className="item" id="green" onClick={this.changeColor.bind(this)}>green</div>
          <div className="item" id="yellow" onClick={this.changeColor.bind(this)}>yellow</div>
        </div>
      </div>
    );
  }
}

export default App;
