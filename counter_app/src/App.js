import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 20,
  };

  addHandler = () => {
    console.log('clicked addHand');
  };

  removeHandler = () => {
    console.log('clicked removeHand');
  };

  resetHandler = () => {
    console.log('clicked resetHand');
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
