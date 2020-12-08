import { graphql } from "react-apollo";
//gql nos permite construir queries en forma string que entiende apollo
import { gql } from "apollo-boost";

//creamos la consulta para obtener las fotos
//withPhotos permite envolver el componente y recuperar la informacion. usamos el patron componente de orden superior
//ya que a una funcion pasamos como parametro un componente (ListOfPhotoCardsComponent) y retorna otro componente (ListOfPhotoCards)
//withPhotos es un componente de orden superior (hoc- high order component) que envuelve el componente ListOfPhotoCardsComponent
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);
