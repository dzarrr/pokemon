import React from 'react';

function PokemonCard(props){
  const { type, imgURL, name } = props;

  return(
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={imgURL} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p className="title ls-5">{name}</p>
              <p className="title ls-5">{`w`}</p>
            </div>
          </div>
        </div>
  );
}

export default PokemonCard;