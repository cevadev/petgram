import React, { Fragment } from "react";

//los componentes nombrados como en este caso Category se importante llamándolos entre llaves
import { ListOfCategories } from "../components/ListOfCategories/index.js";
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards.js";

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  );
};
