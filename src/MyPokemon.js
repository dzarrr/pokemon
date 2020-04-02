import React from 'react';
import axios from 'axios';
// import MyPokemonTable from './MyPokemonTable.js';
import PokemonDetail from './PokemonDetail.js'

export default class MyPokemon extends React.Component {
  state = {
    pokemons: [],
  }

  componentDidMount() {
    let pokemons = { ...localStorage };
    let pokemonNames = Object.keys(pokemons);
    pokemonNames.forEach((name) => {
      let myPokemon = JSON.parse(pokemons[name]).nicknames
      if (myPokemon.length > 0){
        myPokemon.forEach((nickname) => {
          let pokemonState = this.state.pokemons;
          pokemonState.push({
            name,
            nickname
          });
          this.setState({
            pokemons: pokemonState,
          })
        })
      }
    })

    console.log(this.state.pokemons);
  }

  render(){
    return (
      <div className="container">
        <h5 className="title is-5" align="center">My Pokemon List</h5>
        {/* <PokemonTable pokemons={this.state.pokemons} nextURL={this.state.nextURL} 
          prevURL={this.state.prevURL}
          onButtonClick={this.onButtonClick}
          showDetail={this.showDetail}
        />
        <PokemonDetail
          isModalActive={this.state.isModalActive}
          closeModal={this.closeModal}
          imgURL={this.state.selectedPokemon.sprites}
          types={this.state.selectedPokemon.types}
          name={this.state.selectedPokemon.name}
          moves={this.state.selectedPokemon.moves}
          handleButtonClick={this.onCatchButtonClick}
        /> */}
      </div>
    )
  }
}