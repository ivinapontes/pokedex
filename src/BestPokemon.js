import React, { Component } from 'react';


class BestPokemon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        } else {
          throw new Error('HTTP error')
        }
      })
      .then(data => {
        console.log([data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name])
        this.setState({
          isLoading: false,
          pokemonNames: [data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name]
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          err: err
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading... 👽</span>
    } else {
      return (
        <ul>
          {this.state.pokemonNames.map((name, i) => {
            return <li key={i}> My favorite pokemon is {name}</li>;
          })}
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" />
        </ul>
      );
    }
  }
}

export default BestPokemon