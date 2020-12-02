import React from "react";
import ReactDOM from "react-dom";

//hacemos referencia a nuestra app
import App from "./routes/App.js";

/**
 * Especificamos el punto de entrada de nuestra app
 * ReactDOM.render()-> recibe el componente App, recibe el document.getElementById('app')
 */
ReactDOM.render(<App />, document.getElementById("app"));
