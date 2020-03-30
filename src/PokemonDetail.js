import React from 'react';
import PokemonCard from './PokemonCard.js';
import axios from 'axios';

export default class PokemonDetail extends React.Component{
  render(){
    const { imgURL, name, types } = this.props;
    console.log(imgURL, name, types);
    return (
      <div className={`modal ${this.props.isModalActive ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={() => this.props.closeModal()}></div>
      <div className="modal-content">
        <PokemonCard
          name={name}
          imgURL={imgURL}
          types={types}
        />
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => this.props.closeModal()}></button>
    </div>
    )
  }
}
