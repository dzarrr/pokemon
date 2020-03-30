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
        console.log(this.state);
      })
  }

  closeModal = () => {
    this.setState({
      isModalActive: false,
    })
    console.log(this.state);
  }

  showDetail = (pokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => {
        this.setState({
          isModalActive: true,
          selectedPokemon: {
            sprites: res.data.sprites.front_default,
            types: res.data.types,
            name: res.data.name
          }
        })
        console.log(this.state);
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
        console.log(this.state);
      })
  }

  render(){
    return (
      <div className="container">
        <h5 className="title is-5" align="center">Pokemon Detail</h5>
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
        />
      </div>
    )
  }
}