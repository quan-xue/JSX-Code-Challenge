//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
ReactDOM.render(
  //It should display an unordered list (bullet points).
  //It should contain 3 list elements.
  <ul>
    My favourite foods.
    <li>Chicken</li>
    <li>Beef</li>
    <li>Pork</li>
  </ul>,
  document.getElementById("root")
);
