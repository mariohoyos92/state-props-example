import React, { Component } from "react";

export default class Mentor extends Component {
  render() {
    return (
      <p onClick={() => this.props.mentorSelector(this.props.banana)}>
        {this.props.banana}
      </p>
    );
  }
}
