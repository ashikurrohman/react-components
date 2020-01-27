import React, { Component } from "react";


class Mytuts extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Ashikur Rohman",
      roll: 65
    }
  }
  render() {
    return (
      <h1>My name is {this.state.name}</h1>
    )
  }
}

export default Mytuts;