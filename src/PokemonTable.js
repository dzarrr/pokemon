import React from 'react';
import './PokemonTable.css';


function PokemonTable(){
  let testArray = [
    {name: "bulbasaur", owned: "1"},
    {name: "stegosaur", owned: "1"},
    {name: "rhydon", owned: "1"},
    {name: "rhyhorn", owned: "1"},
  ]
  const tableBody = testArray.map( pokemon => {
    return(
      <tr>
        <td>{pokemon.name}</td>
        <td>{pokemon.owned}</td>
      </tr>
    )
  })

  return(
    <div className="table-container">
      <div className="container">
        <table className="table">
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
        <button className="button is-pulled-left">
          Prev
        </button>
        <button className="button is-pulled-right">
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonTable;