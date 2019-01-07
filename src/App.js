import React, { Component } from 'react';
import Workspace from './components/workspace';
import './App.css';
import './css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Workspace/>
      </div>
    );
  }
}

export default App;
