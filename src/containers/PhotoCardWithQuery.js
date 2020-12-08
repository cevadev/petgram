import React from "react";

//gql para escribir las queries con graphql
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { PhotoCard } from "../components/PhotoCard/index.js";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhotos($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ⛔</p>;
  return <PhotoCard {...data.photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
