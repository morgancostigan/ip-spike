import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';


class App extends Component {

  // componentDidMount() {
  //   fetch('http://ip-api.com/json/')
  //     .then(res => res.json(),
  //           console.log('json:', res))
  //     .then(json => this.setState({ data: json }));
  // };

  constructor() {
    super();

    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  };

  setStateHandler() {

    fetch('http://ip-api.com/json/')
      .then(res => res.json())      
      .then(json => this.setState({ data: json.zip }))
    console.log('state', this.state)

  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <button onClick={this.setStateHandler}>Click</button>
            <h2>ZIP: {this.state.data}</h2>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
