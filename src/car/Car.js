import React from "react";
import "./Car.css";

// function Car() {
//   return (
//     <div> This is car component</div>
//   )
// }

// const car = () => {
//   return (
//      <div> This is car component</div>
//   )

// }

// const car = () => <div>This is car component</div>;

export default props => (
  <div className="Car">
    <h3>Car name: {props.name}</h3>
    <p>
      Year:
      <strong>{props.year}</strong>
    </p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Deletek</button>
  </div>
);
