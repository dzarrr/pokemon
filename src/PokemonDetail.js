import React from 'react';
import axios from 'axios';
import PokemonTable from './PokemonTable.js';

export default class PokemonDetail extends React.Component {
  state = {
    pokemons: [],
    nextURL: "",
    prevURL: ""
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
        <PokemonTable pokemons={this.state.pokemons} nextURL={this.state.nextURL} 
          prevURL={this.state.prevURL}
          onButtonClick={this.onButtonClick}
        />
      </div>
    )
  }
}