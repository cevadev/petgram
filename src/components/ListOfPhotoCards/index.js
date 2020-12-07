import React from "react";

import { PhotoCard } from "../PhotoCard/index.js";

import { List, Item } from "./styles.js";

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
        /**pasamos el id del elemento para crear un key unica y guardarlo en el local storage */
        <PhotoCard key={id} id={id} />
      ))}
    </List>
  );
};
