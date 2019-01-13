import React, { Component } from "react";

export default class CounterComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    console.log("increment called");
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    console.log("decreases count");
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("render called");
    return (
      <div className="main">
        <div className="mainDiv">
          <h3>Smash that like button!</h3>
          <button onClick={this.incrementCount}>Likes</button>
          <h3>Or dislike I guess...</h3>
          <button onClick={this.decrease}>Dislike</button>
          <h3>{this.state.count}</h3>
        </div>
      </div>
    );
  }
}
