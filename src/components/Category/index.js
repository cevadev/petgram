import React from "react";

import { Link, Image } from "./styles.js";
const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

//Todos los componentes se van a exportar de manera nombrada, es decir no  habran exports defaults
//el componente Category recibe las siguientes props
//cover -> utilizamos como cover por defecto el DEFAULT_IMAGE
//path -> indica hacia donde debe dirigirse cada vez que seleccionamos una categoria
//emoji -> imagen que nos ayudará a identificar cada una de las categorias
export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "?",
}) => (
  //rederiza Anchor que ahora es un Link, por ello no utilizamos href sino la propiedad to
  <Link to={path}>
    <Image src={cover} />
    {/**renderizamos el emoji */}
    {emoji}
  </Link>
);
