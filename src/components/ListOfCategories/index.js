import React, { useState, useEffect, Fragment } from "react";

//importamos categories de la BD local db.json de nuestra api
//import { categories as mockCategories } from "../../../api/db.json";

import { Category } from "../Category/index.js";

import { List, Item } from "./styles.js";

const API = "https://petgram-server-api-barcvilla.vercel.app/categories";

export const ListOfCategories = () => {
  //useState inicia como un array vacio que luego contendra las categorias por medio de la llamada a la API
  const [categories, setCategories] = useState([]);

  //estado para saber si ListOfCategories esta fijo
  const [showFixed, setShowFixed] = useState(false);

  //useEffect acepta una funcion la cual será la que se ejecute cuando se renderice el componente
  //el segundo parametro un array vacion [] significa que la funcion se ejecutara solo cuando se monte el componente, por lo tanto
  //el useEffect se ejecutara en el primer renderizado y nada mas. Este efecto es similar a colocar la logica en el metodo
  //componentDidMount()
  useEffect(function () {
    fetch(API)
      //convertimos la respuesta de la api a json
      .then((res) => res.json())
      .then((response) => {
        //pasamos nuestra respuesta al metodo setCategories para que actualice el state categories.
        setCategories(response);
      });
  }, []);

  /**
   * useEffect que nos permite mostrar el ListOfCategories cuando es necesaerio, es decir cuando se hizo scroll
   */
  useEffect(
    function () {
      //el metodo onScroll recibe el evento del scroll
      const onScroll = (event) => {
        //mostramos el ListOfCategories cuando el scroll en su eje Y sea mayor a 200
        const newShowFixed = window.scrollY > 200;

        //el ListOfCategories se debe mostrar cuando ya no está fijo, es decir se hizo scroll
        //si es diferente, ejecutamos el metodo setShowFixed para actualizar el estado
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      //escuchamos cada vez que se realice un scroll
      document.addEventListener("scroll", onScroll);

      //funcion que limpia la escuca del eventListener
      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    },
    [showFixed]
  );

  /**
   * con useEffect para a hacer que las categorias se queden fijas, asi cuando el usuario hace scroll, las categorias
   * se puedan ver. Si le pasamos el parametro fixed aplicamos un style para hacer el list categories fijo
   */
  const renderList = (fixed) => {
    return (
      <List className={fixed ? "fixed" : ""}>
        {categories.map((category) => (
          <Item key={category.id}>
            {/**pasamos los props que necesita el componente Category. Podriamos usar el operador spread {...category} */}
            <Category
              cover={category.cover}
              path={category.path}
              emoji={category.emoji}
            />
          </Item>
        ))}
      </List>
    );
  };

  return (
    <Fragment>
      {renderList()}
      {/**se ejecuta la lista fija de categorias solo cuando showFixed es true */}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
