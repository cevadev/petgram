import React from "react";

import { PhotoCard } from "../PhotoCard/index.js";

import { List, Item } from "./styles.js";

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
        <PhotoCard key={id} />
      ))}
    </List>
  );
};
