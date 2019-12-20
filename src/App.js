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


        <Car name ={'Ford'}  year={2018}/>
        <Car name= "Audi" year={2017} />
        <Car name= {'Mazda'} year={2010} />
      </div>
    );
  }
}

export default App;
