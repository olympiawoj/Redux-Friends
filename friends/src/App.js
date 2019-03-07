import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Testing</header>
      </div>
    );
  }
}

const mstp = function(state) {
  return {
    name: state.name,
    friends: state.friends
  };
};
export default connect(mstp)(App);
