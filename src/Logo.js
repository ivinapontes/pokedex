import React, { Component } from "react";

class Logo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <h1>Welcome to {this.props.appName}</h1>
          <img
            onClick={this.props.handleClick}
            src="https://fontmeme.com/images/Pokemon-Logo.jpg"
            style={{ width: 100 + "px" }}
          />
          <button onClick={this.props.handleMeow}> Button</button>
        </header>
      </div>
    );
  }
}

export default Logo;

/*
- Add a < button > to Logo component
  - When < button > is clicked, call this.props.handleClick
    - It should log out "Hello" when clicking the button
      - meowWhenClicked method to App component
        - Pass meowWhenClicked method as a prop to Logo called handleMeow
          - Change < button > to call this.props.handleMeow when clicked
            - It should log out "Meow" when clicking the button

*/
