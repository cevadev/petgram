import React from "react";
import PropTypes from "prop-types";

//importamos iconos de material design de react-icons
//MdFavoriteBorder -> icono favorito bordeado
//MdFavorite > icono favorito completo o relleno
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Button } from "./styles.js";
/**establecemos el valor de liked con el valor contrario que posea */
/**
 * Pasamos por props:
 * liked -> ¿nos gusta la foto?
 * likes -> numero de like
 * onClick -> lo que debe hacer cuando hacemos click
 */
export const FavButton = ({ liked, likes, onClick }) => {
  //si le damos click en el icono favorito, mostramos el icono favorito relleno
  //la primera letra de la constate es mayuscula porque así react entiende que estamos renderizando un componente
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="25" />
      {likes} likes
    </Button>
  );
};

//Indicamos cuales son los tipos de datos de las props utilizadas por FavButton. con isRequired indicamos que son props requeridas
//para el correcto funcionamiento del componente
FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
