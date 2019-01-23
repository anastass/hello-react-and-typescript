import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';

class App extends Component {
  render() {
    /***
      The type of 'defaultName' is defined as a string in helloworld.js module. If another type is assigned in Chrome Dev Tools Console will be 
      displayed a message silmilar like the one below:
    
      index.js:1446 Warning: Failed prop type: Invalid prop `defaultName` of type `number` supplied to `HelloWorld`, expected `string`.
      in HelloWorld (at App.js:17)
      in App (at src/index.js:7)
     */
    const name = "World"; 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <HelloWorld defaultName={name} />
      </div>
    );
  }
}

export default App;
