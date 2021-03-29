import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    console.log('clicked addHand');
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  removeHandler = () => {
    console.log('clicked removeHand');
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  resetHandler = () => {
    console.log('clicked resetHand');
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div>
        <h1 className="circle">{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add 1</button>
        <button onClick={this.removeHandler}>Remove 1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }

};

export default App;
