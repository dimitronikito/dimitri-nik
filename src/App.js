import React, { Component } from 'react';
import './css/App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Playground from './components/Playground';
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Profile />
        <Technologies />
        <Playground />
        <Footer />
      </div>
    );
  }
}

export default App;
