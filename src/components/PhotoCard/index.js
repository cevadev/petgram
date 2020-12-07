import React, { Fragment, useEffect, useRef, useState } from "react";

import { ImgWrapper, Img, Button, Article } from "./styles.js";

//importamos iconos de material design de react-icons
//MdFavoriteBorder -> icono favorito bordeado
//MdFavorite > icono favorito completo o relleno
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
/**
 * Props del componente PhotoCard: id, likes, srcImage
 */
export const PhotoCard = ({ id, likes = 0, srcImage = DEFAULT_IMAGE }) => {
  //tomamos la referencia del elemento (article) en el dom
  const domElement = useRef(null);

  //añadimos un state local al componente (article). Cuando show es true hacemos que se visualice el componente
  const [show, setShow] = useState(false);

  //creamos nuestra key llamada (like + id del elemento en el array) para ser guardada en el local storage
  const key = `like-${id}`;

  //añadimos un state local para manejar los likes.
  const [liked, setLiked] = useState(() => {
    //Revisamos el local storage para recuperar el valor de la key unica llamada key
    try {
      const like = window.localStorage.getItem(key);
      return JSON.parse(like);
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * useEffect que se va ejecutar solamente cuando cambie el valor de domElement
   */
  useEffect(
    function () {
      //retornamos una promesa ya sea window.IntersectionObserver o realizará el import dinamico de un IntersectionObserver
      Promise.resolve(
        //verificamos si el navegador soporta el IntersectionObserver si no lo soporta lo cargamos dinámicamente
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        //en este momento el array contiene 4 articles, imprimira 4 elemento article, de esta forma podremo detectar si
        //cada elemento está en el viewport del usuario
        //console.info(domElement.current);
        const observer = new IntersectionObserver(function (entries) {
          //la propiedad isIntersecting del objeto IntersectionObserverEntry es la que nos dice si el elemento está en el viewport
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            console.info("si");
            setShow(true);

            //cuando show es true, evitamos que el observer se vuelva a actualizar
            observer.disconnect();
          }
        });

        //invocamos al observer
        observer.observe(domElement.current);
      });
    },
    [domElement]
  );

  //si le damos click en el icono favorito, mostramos el icono favorito relleno
  //la primera letra de la constate es mayuscula porque así react entiende que estamos renderizando un componente
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  //funcion para guardar likes en el local storage
  const setLocalStorage = (value) => {
    try {
      //local storage maneja es un map de clave / valor
      window.localStorage.setItem(key, value);
      //actualizamso el local state
      setLiked(value);
    } catch (error) {
      console.error(error);
    }
  };

  //la props ref es una prop especial de react que nos permite capturar el elemento del dom por lo tanto en la variable ref
  //guardamos dicha referencia del elemento del dom

  return (
    <Article ref={domElement}>
      {/**si show is true entonces mostramos el article con la foto */}
      {show && (
        <Fragment>
          {/**nos al dar clik en el anchor nos lleva a detalle de la foto */}
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={srcImage} />
            </ImgWrapper>
          </a>
          {/**establecemos el valor de liked con el valor contrario que posea */}
          <Button type="button" onClick={() => setLocalStorage(!liked)}>
            <Icon size="25" />
            {likes} likes
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
