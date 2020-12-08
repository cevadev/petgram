import React, { Fragment } from "react";

import useLocalStorage from "../../hooks/useLocalStorage.js";
import useNearScreen from "../../hooks/useNearScreen.js";

import { ImgWrapper, Img, Button, Article } from "./styles.js";

//importamos iconos de material design de react-icons
//MdFavoriteBorder -> icono favorito bordeado
//MdFavorite > icono favorito completo o relleno
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
/**
 * Props del componente PhotoCard: id, likes, src
 */
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, domElement] = useNearScreen();
  //creamos nuestra key llamada (like + id del elemento en el array) para ser guardada en el local storage
  const key = `like-${id}`;

  //utilizamos nuestro hook useLocalStorage
  //like -> storedValue
  //setLike -> setLocalStorage
  const [liked, setLiked] = useLocalStorage(key, false);

  //si le damos click en el icono favorito, mostramos el icono favorito relleno
  //la primera letra de la constate es mayuscula porque así react entiende que estamos renderizando un componente
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  //la props ref es una prop especial de react que nos permite capturar el elemento del dom por lo tanto en la variable ref
  //guardamos dicha referencia del elemento del dom

  return (
    <Article ref={domElement}>
      {/**si show is true entonces mostramos el article con la foto */}
      {show && (
        <Fragment>
          {/**al dar click vamos a una querystring  */}
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          {/**establecemos el valor de liked con el valor contrario que posea */}
          <Button type="button" onClick={() => setLiked(!liked)}>
            <Icon size="25" />
            {likes} likes
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
