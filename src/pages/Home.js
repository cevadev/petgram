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
