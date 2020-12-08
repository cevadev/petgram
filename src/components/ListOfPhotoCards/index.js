import React from "react";

import { PhotoCard } from "../PhotoCard/index.js";

import { List, Item } from "./styles.js";

/**
 *
 * @param {*} props -> contiene un objeto data que dentro posee el array photos (por defecto es un array vacio) con todos los registros
 */
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  //examinamos las props
  //console.info(props);
  return (
    <List>
      {photos.map((photo) => (
        <Item key={photo.id}>
          {/**pasamos el id del elemento para crear un key unica y guardarlo en
          el local storage. Tambien podemos pasar al componente PhotoCards {...photo} */}
          <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
        </Item>
      ))}
    </List>
  );
};
