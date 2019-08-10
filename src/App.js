import React, { Component } from 'react';
import './css/App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TopBar />
        <div>
          <Profile />
          <Technologies />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
