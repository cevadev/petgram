import React, { useEffect, useState, useRef } from "react";

function useNearScreen() {
  //tomamos la referencia del elemento (article) en el dom
  const domElement = useRef(null);

  //añadimos un state local al componente (article). Cuando show es true hacemos que se visualice el componente
  const [show, setShow] = useState(false);
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
            //console.info("si");
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

  //retorna show -> dice si el elemento se tiene que mostrar,
  //domElement -> retorna la referencia del elemento
  return [show, domElement];
}

export default useNearScreen;
