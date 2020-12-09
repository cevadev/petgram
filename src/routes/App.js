import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { Home } from "../pages/Home.js";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery.js";
import Logo from "../components/Logo/index.js";

//import estilos globales
import { GlobalStyle } from "../styles/GlobalStyles.js";

function App() {
  //psamos como parametro la querystring de la barra de direcciones
  const urlParams = new window.URLSearchParams(window.location.search);
  //recuperamos el detailId al que queremos navegar
  const detailId = urlParams.get("detail");
  console.info(detailId);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/**si tenemos un detailId renderizamos el detalle de la foto */}
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </div>
  );
}

export default App;
