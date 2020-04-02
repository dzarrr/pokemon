import React from 'react';
import './PokemonTable.css';

function PokemonTable(props){
  const { pokemons, nextURL, prevURL } = props

  const tableBody = pokemons.map( pokemon => {
    let ownedPokemons = JSON.parse(window.localStorage.getItem(pokemon.name));
    let N_ownedPokemons = ownedPokemons === null ? 0 : ownedPokemons.nicknames.length
    return(
      <tr key={pokemon.name} onClick={() => props.showDetail(pokemon.name)}>
        <td>{pokemon.name}</td>
        <td>{N_ownedPokemons}</td>
      </tr>
    )
  })

  return(
    <div className="table-container">
      <div className="container">
        <table className="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Owned</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
      <div className="container button-container">
        <button className="button is-pulled-left" onClick={() => props.onButtonClick(prevURL)} disabled={prevURL === null}>
          Prev
        </button>
        <button className="button is-pulled-right" onClick={() => props.onButtonClick(nextURL)} disabled={nextURL === null}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonTable;