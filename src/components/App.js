import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="profile-columns">
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;
