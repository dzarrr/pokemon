import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PokemonList from './PokemonList';
import MyPokemon from './MyPokemon';

const routing = (
  <Router>
    <div>
      <div className="tabs">
        <ul>
          <li>
            <Link to="/list">Pokemon List</Link>
          </li>
          <li>
            <Link to="/mypokemon">My Pokemon</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={PokemonList}/>
      <Route exact path="/list" component={PokemonList} />
      <Route exact path="/mypokemon" component={MyPokemon} />
    </div>
  </Router>
)
ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
