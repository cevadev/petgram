import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { ListOfFavs } from "../components/ListOfFavs";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

//Render props que le pasamos al componente query
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ⛔</p>;

  //recuperamos del objeto data del query getFavs todos los favoritos
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};

export const FavsWithQuery = () => (
  /**fetchPlicy=network-only no se va a confiar en el cache, sino que irá a la red y ejecutara la query para obtener favs */
  <Query query={GET_FAVS} fetchPolicy="network-only">
    {renderProp}
  </Query>
);
