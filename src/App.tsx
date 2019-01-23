import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <HelloWorld defaultName='World' />
      </div>
    );
  }
}

export default App;
