import React from "react";

import { FavsWithQuery } from "../containers/GetFavorites";
import { Layout } from "../components/Layout/index.js";

//utilizamos export default de esta manera para permitir el React.lazy() de Favs
export default ({ favs = [] }) => {
  return (
    <Layout
      title="tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos"
    >
      <FavsWithQuery />
    </Layout>
  );
};

/* export const Favs = ({ favs = [] }) => {
  return (
    <Layout
      title="tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos"
    >
      <FavsWithQuery />
    </Layout>
  );
}; */
