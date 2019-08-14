import React, { Component } from 'react';
import './css/App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Playground from './components/Playground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="bod">
          <TopBar />
          <Profile />
          <Technologies />
          <Playground />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
