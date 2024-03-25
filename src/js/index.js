//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import ListaDeTareas from "./component/ListaDeTareas.jsx";

//render your react application
ReactDOM.render(<ListaDeTareas />, document.querySelector("#app"));
