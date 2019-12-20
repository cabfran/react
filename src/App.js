import React, { Component } from "react";

import "./App.css";
import { render } from "@testing-library/react";
import Car from "./car/Car";

class App extends Component {
  render() {
    const divStyle = {
      textAlign: "center"
    };

    return (
      <div style={divStyle}>
        <h1 style={{ color: "green", fontSize: "120px" }}> Hello, World!</h1>
        <p style={{ color: "orange", fontSize: "60px" }}>Hello </p>
        <Car />
      </div>
    );
  }
}

export default App;
