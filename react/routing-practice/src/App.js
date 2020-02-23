import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Hello from './components/Hello';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/:word/*" />
      </Router>
    </div>
  );
}

export default App;
