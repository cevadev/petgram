import React from "react";

//los componentes nombrados como en este caso Category se importante llamándolos entre llaves
import { ListOfCategories } from "../components/ListOfCategories/index.js";

//import estilos globales
import { GlobalStyle } from "../../GlobalStyles.js";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
}

export default App;
