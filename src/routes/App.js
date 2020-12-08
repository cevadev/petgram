import React from "react";

//los componentes nombrados como en este caso Category se importante llamándolos entre llaves
import { ListOfCategories } from "../components/ListOfCategories/index.js";
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards.js";
import Logo from "../components/Logo/index.js";

//import estilos globales
import { GlobalStyle } from "../styles/GlobalStyles.js";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </div>
  );
}

export default App;
