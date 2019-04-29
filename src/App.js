import React, { Component } from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Clock from "./Clock";

class App extends Component {
  logWhenClicked = () => {
    alert("this was clicked");
  };

  meowWhenClicked = () => {
    console.log("Meow");
  };

  render() {
    return (
      <div>
        <Logo
          appName="Pokedex"
          handleClick={this.logWhenClicked}
          handleMeow={this.meowWhenClicked}
        />
        <BestPokemon pokemonNames={["Squirtle", "Bulbasaur", "Charmander"]} />
        <CaughtPokemon date={new Date().toLocaleDateString()} />
        <CaughtPokemon date={new Date().toLocaleDateString()} />
        <CaughtPokemon date={new Date().toLocaleDateString()} />
        <Clock />

      </div>
    );
  }
}

export default App;
