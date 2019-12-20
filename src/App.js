import React, { Component } from "react";

import "./App.css";
import { render } from "@testing-library/react";
import Car from "./car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: "2018" },
      { name: "Audi", year: "2017" },
      { name: "Mazda", year: "2010" }
    ],
    pageTitle: "React components"
  };

  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + " (changed)";

    this.setState({
      pageTitle: newTitle
    });
  };

  render() {
    const divStyle = {
      textAlign: "center"
    };
    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1 style={{ color: "green", fontSize: "120px" }}>
          {" "}
          {this.state.pageTitle}
        </h1>
        <p style={{ color: "orange", fontSize: "60px" }}>Hello </p>

        <button onClick={this.changeTitleHandler}> Change title </button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    );
  }
}

export default App;
