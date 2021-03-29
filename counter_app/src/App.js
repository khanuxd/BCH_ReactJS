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
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
    /* if (this.state.counter > 0){
      this.setState({
        counter: this.state.counter - 1,
      });
    } else {
      this.setState({
        counter: 0,
      });
    } */
  };

  resetHandler = () => {
    console.log('clicked resetHand');
    this.setState({
      counter: 0,
    });
  };

  render() {

    let circleClass = `${this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
          ? "even"
          : "odd"
      } circle`;

    return (
      <div>
        <h1 className={circleClass}>{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add 1</button>
        <button onClick={this.removeHandler}>Remove 1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }

};

export default App;
