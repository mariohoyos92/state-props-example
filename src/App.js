import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Mentor from "./Mentor";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mentors: ["Erik", "Mario", "Brycd", "Mackenzie"],
      selectedMentor: ""
    };
    this.mentorSelector = this.mentorSelector.bind(this);
  }

  mentorSelector(mentorName) {
    this.setState({ selectedMentor: mentorName });
  }

  render() {
    let mentorList = this.state.mentors.map(mentor => (
      <Mentor name={mentor} mentorSelector={this.mentorSelector} />
    ));

    let img;
    switch (this.state.selectedMentor) {
      case "Erik": {
        img = (
          <img src="https://avatars3.githubusercontent.com/u/23691259?s=460&v=4" />
        );
        break;
      }
      case "Mario": {
        img = (
          <img src="https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_mario.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png" />
        );
        break;
      }
      case "Brycd": {
        img = (
          <img src="https://avatars2.githubusercontent.com/u/13997340?s=460&v=4" />
        );
        break;
      }
      case "Mackenzie": {
        img = (
          <img src="https://avatars3.githubusercontent.com/u/29904315?s=460&v=4" />
        );
        break;
      }
      default: {
        img = <p>Select a mentor from above</p>;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to State and Props!</h1>
        </header>
        {mentorList}
        {img}
      </div>
    );
  }
}

export default App;
