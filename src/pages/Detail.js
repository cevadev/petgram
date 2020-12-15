import React from "react";

import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery.js";
import { Layout } from "../components/Layout/index.js";

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
