import React from "react";

//los componentes nombrados como en este caso Category se importante llamándolos entre llaves
import { ListOfCategories } from "../components/ListOfCategories/index.js";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/index.js";
import Logo from "../components/Logo/index.js";

//import estilos globales
import { GlobalStyle } from "../../GlobalStyles.js";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}

export default App;
