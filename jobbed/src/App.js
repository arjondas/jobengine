import React, { Component } from 'react';
import classes from './App.css';
import NavBar from './components/NavBar/NavBar';
import Account from './components/account/account';
import Search from './components/Search/search';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';
import Viewport from './components/Viewport/Viewport';

class App extends Component {
  render() {
    return (
      <div className = {classes.App}>
        <NavBar><Account/></NavBar>
        {/* <Display/> */}
        {/* <Search/> */}
        {/* <NavBar/> */}
        {/* <Dashboard/> */}
        {/* <Viewport/> */}
      </div>
    );
  }
}

export default App;