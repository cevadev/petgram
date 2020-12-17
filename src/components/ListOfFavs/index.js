import React from "react";
import PropTypes from "prop-types";

import { Grid, Image, Link } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} />
        </Link>
      ))}
    </Grid>
  );
};

ListOfFavs.propTypes = {
  //arrayOf -> podemos indicar la forma del array que debe recibir como props
  favs: PropTypes.arrayOf(
    //PropTypes.shape() -> usamos para indicar que es un array de objetos
    PropTypes.shape({
      //indicamos la forma o estructura del array y si es requerido
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
