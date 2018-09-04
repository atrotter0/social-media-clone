import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import Profile from './Profile';
import Wall from './Wall';
import FriendRecommendations from './FriendRecommendations';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
          <div className="profile-columns">
            <Profile />
            <Wall />
            <FriendRecommendations />
          </div>
      </div>
    );
  }
}

export default App;
