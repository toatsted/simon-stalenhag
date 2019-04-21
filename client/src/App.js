import React, { Component } from 'react';
import './App.css';

// Pages
import Index from './pages/Index/Index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />     
      </div>
    );
  }
}

export default App;
