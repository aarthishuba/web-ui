import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import OilLists from './components/OilLists';
class App extends Component {
  render() {
    return (
     
      <div className="App">
        <header className="App-header">
       <h1> Young Oil </h1>
        </header>
        <div className="container">
        <div className="row">
      <div className="col m6 s12">
      <Welcome />
      </div>
      
       <div className="col m6 s12">
      <OilLists />

      </div>
      
    </div>
      
      </div>
      </div>
    );
  }
}

export default App;
