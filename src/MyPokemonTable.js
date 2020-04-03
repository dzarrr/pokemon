import React from 'react';
import './PokemonTable.css';

function PokemonTable(props){
  const { pokemons } = props

  const tableBody = pokemons.map( (pokemon, index) => {
    return(
      <tr key={index}>
        <td>{pokemon.name}</td>
        <td>{pokemon.nickname}</td>
        <td>
          <button className="button is-danger is-small is-outlined" onClick={ () => props.onButtonClick(pokemon.name, pokemon.nickname)}>
            release
          </button>
        </td>
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
              <th>Nickname</th>
              <th>Release</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PokemonTable;