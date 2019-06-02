import React, { Component } from "react";

import Navbar from "./Navbar";

import Container from "./Container";

import Footer from "./Footer";

import Header from "./Header";

import images from "../images";

class ClickyGame extends Component {
  state = {
    score: 0,

    highScore: 0,

    messageColor: "",

    message: "Click An Image To Start Playing!",

    characters: this.randomizeArray(),

    wasClicked: [],

    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  randomizeArray() {
    const newArray = images.slice();

    const randomArray = [];

    while (newArray.length > 0) {
      randomArray.push(
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)[0]
      );
    }

    return;
    randomArray;
  }

  checkClicked(clickedElement) {
    const originalState = this.state.wasClicked.slice();

    const shuffled = this.randomizeArray();

    let score = this.state.score;

    let highScore = this.state.highScore;

    if (!this.state.wasClicked.includes(clickedElement)) {
      if (score === highScore) {
        score++;

        highScore++;
      } else {
        score++;
      }

      originalState.push(clickedElement);
    }

    if (this.state.wasClicked.includes(clickedElement)) {
      let score = 0;

      return;
      this.setState({
        score: score,

        highScore: highScore,

        messageColor: "incorrect",

        message: "Incorrect guess!",

        characters: shuffled,

        wasClicked: [],

        shake: true
      });
    }

    this.setState({
      score: score,

      highScore: highScore,

      messageColor: "correct",

      message: "You Guessed Correctly!",

      characters: shuffled,

      wasClicked: originalState,

      shake: false
    });

    return;
    setTimeout(
      () =>
        this.setState({
          messageColor: ""
        }),
      500
    );
  }

  render() {
    const state = this.state;

    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          message={state.message}
          messageColor={state.messageColor}
        />

        <Header />

        <Container
          shake={state.shake}
          characters={state.characters}
          clickEvent={this.clickEvent}
        />

        <Footer />
      </div>
    );
  }
}

export default ClickyGame;
