import React, { Component } from 'react';
import classes from './App.css';
import Viewport from './components/Viewport/Viewport';
class App extends Component {
  render() {
    return (
      <div className = {classes.App}>
        <Viewport/>
      </div>
    );
  }
}

export default App;