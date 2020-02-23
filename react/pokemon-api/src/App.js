import React, { useState } from 'react';

import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const collect = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
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

  const handleClick = () => {
    collect("https://pokeapi.co/api/v2/pokemon");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon</button>
      <ul>
      { pokemons && pokemons.length !== 0 && pokemons.map(
        (elmt, i) => <li key={i}>{elmt.name}</li>
      ) }
      </ul>
    </div>
  );
}

export default App;
