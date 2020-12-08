import React from "react";
import { graphql } from "react-apollo";
//gql nos permite construir queries en forma string que entiende apollo
import { gql } from "apollo-boost";

//creamos la consulta para obtener las fotos
//withPhotos permite envolver el componente y recuperar la informacion. usamos el patron componente de orden superior
//ya que a una funcion pasamos como parametro un componente (ListOfPhotoCardsComponent) y retorna otro componente (ListOfPhotoCards)
const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

import { PhotoCard } from "../PhotoCard/index.js";

import { List, Item } from "./styles.js";

/**
 *
 * @param {*} props -> contiene un objeto data que dentro posee el array photos (por defecto es un array vacio) con todos los registros
 */
const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  //examinamos las props
  //console.info(props);
  return (
    <List>
      {photos.map((photo) => (
        <Item key={photo.id}>
          {/**pasamos el id del elemento para crear un key unica y guardarlo en
          el local storage */}
          <PhotoCard {...photo} />
        </Item>
      ))}
    </List>
  );
};

//a la funcion withPhotos le pasamos por props como parametro el componente ListOfPhotoCardsComponent
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
