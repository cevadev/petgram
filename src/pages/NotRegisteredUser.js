import React from "react";

import Context from "../Context.js";

export const NotRegisteredUser = () => {
  return (
    //con el consumer vamos a poder consumir los datos del contexto
    <Context.Consumer>
      {/**consumer recibe una render props, por lo que renderizamos un funcion, que recibe por param isAuth para saber si
        el user esta autenticado y el metodo    activateAuth para actualizar el state */}
      {({ activateAuth }) => {
        return (
          /**renderizamos un formulario que le permite al usuario autentificarse */
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        );
      }}
    </Context.Consumer>
  );
};
