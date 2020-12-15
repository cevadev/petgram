import React, { Fragment, useContext } from "react";

import { Context } from "../Context.js";
import { Button } from "../components/Button/index.js";

export const User = () => {
  //recuperamos la funcion removeAuth del Context por medio del hook useContext
  const { removeAuth } = useContext(Context);

  return (
    <Fragment>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </Fragment>
  );
};
