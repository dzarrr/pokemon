import React from 'react';
import MyPokemonTable from './MyPokemonTable.js';

export default class MyPokemon extends React.Component {
  state = {
    pokemons: [],
  }

  setTable = () => {
    let pokemons = { ...localStorage };
    let pokemonNames = Object.keys(pokemons);
    let pokemonState = [];

    pokemonNames.forEach((name) => {
      let myPokemon = JSON.parse(pokemons[name]).nicknames
      if (myPokemon.length > 0){
        myPokemon.forEach((nickname) => {
          pokemonState.push({
            name,
            nickname
          });
        })
      }
    })

    this.setState({
      pokemons: pokemonState,
    });
  }

  componentDidMount() {
    this.setTable();
  }

  onReleasePokemon = (name, nickname) => {
    let pokemons = JSON.parse(window.localStorage.getItem(name));
    for (let i = 0; i < pokemons.nicknames.length; i++){
      if (pokemons.nicknames[i] === nickname){
        pokemons.nicknames.splice(i, 1);
      }
    }
    window.localStorage.setItem(name, JSON.stringify(pokemons));
    this.setTable();
  }

  render(){
    return (
      <div className="container">
        <h5 className="title is-5" align="center">My Pokemon List</h5>
        <MyPokemonTable pokemons={this.state.pokemons} 
          onButtonClick={this.onReleasePokemon}
          setTable={this.setTable}
        />
      </div>
    )
  }
}