import React from 'react';
import PokemonCard from './PokemonCard.js';

export default class PokemonDetail extends React.Component{
  render(){
    const { imgURL, name, types, moves, handleButtonClick } = this.props;
    return (
      <div className={`modal ${this.props.isModalActive ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={() => this.props.closeModal()}></div>
      <div className="modal-content">
        <PokemonCard
          name={name}
          imgURL={imgURL}
          types={types}
          moves={moves}
          onCatchButtonClick={handleButtonClick}
        />
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => this.props.closeModal()}></button>
    </div>
    )
  }
}
