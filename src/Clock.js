import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick = () => {
    // console.log("tick");
    this.setState({
      date: new Date()
    });
  };
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingClock: true };
  }
  toggle = () => this.setState({ isShowingClock: !this.state.isShowingClock });
  render() {
    return (
      <div>
        {this.state.isShowingClock && <Time />}
        <button onClick={this.toggle}>Toggle time</button>
      </div>
    );
  }
}

export default Clock;
