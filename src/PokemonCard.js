import React from 'react';
import './PokemonCard.css';

function PokemonCard(props){
  let { types, imgURL, name, moves } = props;
  name = name !== undefined ? name.charAt(0).toUpperCase() + name.slice(1) : name;
  types = types !== undefined ? types.join(" ") : types;
  if (moves !== undefined) {
    moves = moves.map((move) => {
      return <li key={move.move.name}>{move.move.name}</li>;
    });
  }

  return(
        <div className="card container">
          <div className="card-image">
            <figure className="image is-128x128 container">
              <img src={imgURL} alt="pokemon sprite"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p className="title is-3" align="center">{name}</p>
              <p className="subtitle is-4" align="center">{types}</p>
              <div className="has-text-centered">
                <button onClick={() => props.onCatchButtonClick(name)} className="button">CATCH</button>
              </div>
              <p className="subtitle is-6" align="left">Move List</p>
              <ul>
                {moves}
              </ul>
            </div>
          </div>
        </div>
  );
}

export default PokemonCard;