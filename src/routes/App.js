import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { Home } from "../pages/Home.js";
import { Detail } from "../pages/Detail.js";
import Logo from "../components/Logo/index.js";

//import estilos globales
import { GlobalStyle } from "../styles/GlobalStyles.js";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
    </div>
  );
}

export default App;
