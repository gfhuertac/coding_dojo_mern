import React, { useState } from 'react';

import ResourceContext from './contexts/ResourceContext';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

import './App.css';

function App() {

  const [state, setState] = useState(0);

  return (
    <div className="App">
      <ResourceContext.Provider value={ {state, setState} }>
        <SearchForm />
        <SearchResult />
      </ResourceContext.Provider>
    </div>
  );
}

export default App;
