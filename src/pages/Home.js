import React from "react";

//los componentes nombrados como en este caso Category se importante llamándolos entre llaves
import { ListOfCategories } from "../components/ListOfCategories/index.js";
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards.js";
import { Layout } from "../components/Layout/index.js";

export const Home = ({ categoryId }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con petgram puedes encontrar fotos de animales muy bonitas"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

/**
 * React.memo(HomePage) para que no tenga que volver a renderizar react la home
 * pasamos una funcion anonima que va a recibir las props anteriores y las actuales.
 */
//export const Home = React.memo(HomePage, (prevProps, props) => {

//vamos a comparar la categoria para saber si han cambiado, si cambio el componente HomePage se volverá a renderiza
//de lo contrario no es necesario volver a renderizar.
//recordamos el componente, es decir, no se renderiza si la prop anterios es igual a la prop actual, lo que
//significa que no cambio en id de categoria

//return prevProps.categoryId === props.categoryId;
//});
