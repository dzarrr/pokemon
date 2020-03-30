import React from 'react';
import logo from './logo.svg';
import './App.css';

import PokemonTable from './PokemonTable.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">
          Test Bulma cuy
        </p>
        <p>yang ini ga bulma</p>
        <PokemonTable />
      </header>
    </div>
  );
}

export default App;
