import React, { Component } from "react";

export default class Mentor extends Component {
  render() {
    console.log(this.props);
    return (
      <p onClick={() => this.props.mentorSelector(this.props.name)}>
        {this.props.name}
      </p>
    );
  }
}
