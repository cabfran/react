import React from "react";

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

export default () => (
  <div>
    <p>This is car component</p>
    <p>
      Today your lucky number is:{" "}
      <strong>{Math.round(Math.random() * 10)}</strong>
    </p>
  </div>
);
