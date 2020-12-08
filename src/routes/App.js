import React, { Fragment } from "react";

//los componentes nombrados como en este caso Category se importante llamándolos entre llaves
import { ListOfCategories } from "../components/ListOfCategories/index.js";
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards.js";
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
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
