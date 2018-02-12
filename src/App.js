import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

import Mentor from "./Mentor";
import ParameterRenderer from "./ParameterRenderer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mentors: ["Erik", "Mario", "Brycd", "Mackenzie"],
      selectedMentor: "",
      renderCondition: false
    };

    // this.mentorSelector = this.mentorSelector.bind(this);
  }

  // componentDidMount() {
  //   axios
  //     .get("/api/test")
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({ someProp: response.data });
  //     })
  //     .catch(err => console.log(err));
  // }

  // mentorSelector(mentorName) {
  //   this.setState({ selectedMentor: mentorName });
  // }

  handleCondition() {
    this.setState({ renderCondition: !this.state.renderCondition });
  }

  render() {
    let mentorList = this.state.mentors.map(mentor => {
      return (
        <div key={Math.random()}>
          <Link to={`/parameters/${mentor}/hoyos`}>{mentor}</Link>
        </div>
      );
    });

    // let img;

    // switch (this.state.selectedMentor) {
    //   case "Erik": {
    //     img = (
    //       <img src="https://avatars3.githubusercontent.com/u/23691259?s=460&v=4" />
    //     );
    //     break;
    //   }
    //   case "Mario": {
    //     img = (
    //       <img src="https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_mario.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png" />
    //     );
    //     break;
    //   }
    //   case "Brycd": {
    //     img = (
    //       <img src="https://avatars2.githubusercontent.com/u/13997340?s=460&v=4" />
    //     );
    //     break;
    //   }
    //   case "Mackenzie": {
    //     img = (
    //       <img src="https://avatars3.githubusercontent.com/u/29904315?s=460&v=4" />
    //     );
    //     break;
    //   }
    //   default: {
    //     img = <p>Select a mentor from above</p>;
    //   }
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Router With Params</h1>
        </header>
        {mentorList}
        <Switch>
          <Route
            path="/"
            exact
            render={() => <h1> this is where routes will show</h1>}
          />
          <Route
            path="/parameters/:name/:lastname"
            render={props => <ParameterRenderer lastName="mayo" {...props} />}
          />
        </Switch>
        <br />
        <br />
        <button onClick={() => this.handleCondition()}>
          {" "}
          Toggle the Conditional render below{" "}
        </button>
        {this.state.renderCondition && <Mentor banana={"mario"} />}
      </div>
    );
  }
}

export default App;
