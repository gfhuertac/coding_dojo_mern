import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const collect = (url) => {
    axios.get(url)
      .then(response => {
        return response.data;
    }).then(response => {
      pokemons.push(...response.results);
      if (response.next !== null) {
        collect(response.next);
      } else {
        setPokemons([...pokemons]);
      }
    }).catch(err=>{
        console.log(err);
    });
  };

  useEffect(() => {
    collect("https://pokeapi.co/api/v2/pokemon");
  });

  return (
    <div className="App">
      { (!pokemons || pokemons.length === 0) && <span>loading...</span> }
      <ul>
      { pokemons && pokemons.length !== 0 && pokemons.map(
        (elmt, i) => <li key={i}>{elmt.name}</li>
      ) }
      </ul>
    </div>
  );
}

export default App;
