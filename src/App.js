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

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    });
  }
  deleteHandler(index) {
    let cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  }

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
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
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
