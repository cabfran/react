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
    pageTitle: "React components",
    showCars: false
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  changeTitleHandler = pageTitle => {
    this.setState({ pageTitle });
  };

  render() {
    const divStyle = {
      textAlign: "center"
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1 style={{ color: "green", fontSize: "120px" }}>
          {" "}
          {this.state.pageTitle}
        </h1>
        <p style={{ color: "orange", fontSize: "60px" }}>Hello </p>

        <button onClick={this.toggleCarsHandler}> Toggle cars </button>

        {cars}
      </div>
    );
  }
}

export default App;
