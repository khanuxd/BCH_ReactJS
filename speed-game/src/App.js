import React, { Component } from 'react';
import Circle from './Components/Circle';
import GameOver from './Components/GameOver';

import './App.css';

import startSound from '../src/assets/sounds/start.mp3';
import endSound from '../src/assets/sounds/end.mp3';

let gameStartSound = new Audio(startSound);
let gameEndSound = new Audio(endSound);

const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" }
    ],
    showGameOver: false,
    rounds: 0,
    gameStart: false,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log('clicked circle ' + id);

    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nextCircle = () => {

    if (this.state.rounds >= 3) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRandInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    console.log(this.state.rounds);

    this.pace *= 0.95;

    this.timer = setTimeout(this.nextCircle, this.pace)

    console.log("active circle is ", this.state.current);
  }

  startHandler = () => {
    this.nextCircle();
    this.setState({ gameStart: true });
    gameStartSound.play();
  }

  endHandler = () => {

    let endScore = undefined;

    if (this.state.score <= 5) {
      endScore = 'Your score is less than 5, Try More!';
    } else if (this.state.score <= 10) {
      endScore = 'Your score is less than 10, you can do it!';
    } else if (this.state.score >= 11 && this.state.score <= 20) {
      endScore = 'You are doing great, keep it up!';
    } else {
      endScore = 'You are Amazing!';
    }

    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);

    this.setState({
      endMessage: endScore,
    })

    this.setState({
      showGameOver: true
    })
  };

  render() {
    const circlesList = this.state.circles.map(circle => {
      return <Circle
        id={circle.id}
        key={circle.id}
        color={circle.color}
        click={() => this.clickHandler(circle.id)}
        active={this.state.current === circle.id}
        disabled={this.state.gameStart}
      />
    });

    return (
      <main>
        <h1>Speed Test</h1>
        <h3>Your score is: {this.state.score}</h3>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>Start</button>
        <button onClick={this.endHandler} disabled={!this.state.gameStart}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} endMessage={this.state.endMessage} />}
      </main>
    );
  }
}

export default App;
