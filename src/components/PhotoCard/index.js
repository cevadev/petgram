import React, { Fragment } from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

//import useLocalStorage from "../../hooks/useLocalStorage.js";

import useNearScreen from "../../hooks/useNearScreen.js";
import { FavButton } from "../FavButton/index.js";
import { ToggleLikeMutation } from "../../containers/ToggleLikeMutation.js";

import { ImgWrapper, Img, Article } from "./styles.js";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
/**
 * Props del componente PhotoCard: id, likes, src
 */
export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, domElement] = useNearScreen();

  //creamos nuestra key llamada (like + id del elemento en el array) para ser guardada en el local storage
  //const key = `like-${id}`;

  //utilizamos nuestro hook useLocalStorage
  //like -> storedValue
  //setLike -> setLocalStorage
  //const [liked, setLiked] = useLocalStorage(key, false); //ahora utilizamos el session storage

  //la props ref es una prop especial de react que nos permite capturar el elemento del dom por lo tanto en la variable ref
  //guardamos dicha referencia del elemento del dom
  return (
    <Article ref={domElement}>
      {/**si show is true entonces mostramos el article con la foto */}
      {show && (
        <Fragment>
          {/**al dar click vamos a una querystring  */}
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                //setLiked(!liked);
                toggleLike({ variables: { input: { id } } });
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  src: PropTypes.string.isRequired,
  //likes puede ser un numero positivo de 0 en adelante. creamos para esto una custom prop validation
  likes: function (props, propName, componenteName) {
    //accedemos al valor de la prop
    const propValue = props[propName];
    if (propValue === "undefined") {
      return new Error(`${propName} Value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than zero`);
    }
  },
};
