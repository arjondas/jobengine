import React, { Component } from 'react';
import classes from './App.css';
import Account from './components/account/account';
import Search from './components/Search/search';

class App extends Component {
  render() {
    return (
      <div className = {classes.App}>
        <Search/>
        <Account/>
      </div>
    );
  }
}

export default App;