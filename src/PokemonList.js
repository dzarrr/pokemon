import React from 'react';
import axios from 'axios';
import PokemonTable from './PokemonTable.js';
import PokemonDetail from './PokemonDetail.js'

export default class PokemonList extends React.Component {
  state = {
    pokemons: [],
    nextURL: "",
    prevURL: "",
    isModalActive: false,
    selectedPokemon:{},
  }

  onButtonClick = (url) => {
    axios.get(url)
      .then(res => {
        this.setState({
          pokemons: res.data.results,
          nextURL: res.data.next,
          prevURL: res.data.previous,
        })
        this.state.pokemons.forEach(pokemon => {
          if (window.localStorage.getItem(pokemon.name) === null){
            window.localStorage.setItem(pokemon.name, JSON.stringify({nicknames: []}))
          }
        });
      })
  }

  closeModal = () => {
    this.setState({
      isModalActive: false,
    })
  }

  onCatchButtonClick = (pokemon) => {
    if (Math.random() < 0.5){
      alert(`Failed to catch ${pokemon}`);
    } else {
      let nickname = prompt(`Catched wild ${pokemon}!`);
      alert(nickname);
      let currentPokemon = JSON.parse(window.localStorage.getItem(pokemon.toLowerCase()));
      currentPokemon.nicknames.push(nickname);
      window.localStorage.setItem(pokemon.toLowerCase(), JSON.stringify(currentPokemon));
      this.closeModal();
    }
  }

  showDetail = (pokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => {
        this.setState({
          isModalActive: true,
          selectedPokemon: {
            sprites: res.data.sprites.front_default,
            types: res.data.types.map((type) => type.type.name),
            name: res.data.name,
            moves: res.data.moves
          }
        })
      })
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        this.setState({
          pokemons: res.data.results,
          nextURL: res.data.next,
          prevURL: res.data.previous,
        })

        this.state.pokemons.forEach(pokemon => {
          if (window.localStorage.getItem(pokemon.name) === null){
            window.localStorage.setItem(pokemon.name, JSON.stringify({nicknames: []}))
          }
        });
      })
  }

  render(){
    return (
      <div className="container">
        <h5 className="title is-5" align="center">Pokemon List</h5>
        <PokemonTable pokemons={this.state.pokemons} nextURL={this.state.nextURL} 
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
        />
      </div>
    )
  }
}