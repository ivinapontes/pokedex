import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      caughtPokemon: 0
    };
  }

  catchPokemon = () => {
    this.setState(previousState => {
      return {
        caughtPokemon: previousState.caughtPokemon + 1
      };
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('component will unmount')
  }

  render() {
    return (
      <div>
        <p>
          Caught {this.state.caughtPokemon} Pokemon on {this.props.date}
        </p>

        <button onClick={this.catchPokemon}>Catch Pokemon</button>
      </div>
    );
  }
}
export default CaughtPokemon;
