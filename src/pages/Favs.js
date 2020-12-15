import React from "react";

import { FavsWithQuery } from "../containers/GetFavorites";
import { Layout } from "../components/Layout/index.js";

export const Favs = ({ favs = [] }) => {
  return (
    <Layout
      title="tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos"
    >
      <FavsWithQuery />
    </Layout>
  );
};
