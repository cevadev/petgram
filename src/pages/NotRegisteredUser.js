import React, { Fragment } from "react";

import Context from "../Context.js";
import { UserForm } from "../components/UserForm/index.js";
import { RegisterMutation } from "../containers/RegisterMutation.js";

export const NotRegisteredUser = () => {
  return (
    //con el consumer vamos a poder consumir los datos del contexto
    <Context.Consumer>
      {/**consumer recibe una render props, por lo que renderizamos un funcion, que recibe por param isAuth para saber si
        el user esta autenticado y el metodo    activateAuth para actualizar el state */}
      {({ activateAuth }) => {
        return (
          <Fragment>
            <RegisterMutation>
              {/**RegisterMutation nos devuelve el parametro para hacer la mutacion que es el param register 
                y register es lo que queremos que se ejecute*/}
              {(register, { data = {}, loading, error }) => {
                /**personalizamos que es lo que se va a ejecutar cuando el usuario haga submit */
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };
                  //register necesita un objeto llamado variables para ejecutarse
                  //una vez que e register se ejecuta retorna una promesa y ejecutamos el activateAuth que indica que el user
                  //esta autenticado
                  register({ variables }).then(activateAuth);
                };

                const errorMsg =
                  error &&
                  "No se puede registrar el usuario. Ya existe o los datos no son correctos.";

                /**rederizamos el formulario de registro */
                return (
                  <UserForm
                    error={errorMsg}
                    disabled={loading}
                    title="Registrarse"
                    onSubmit={onSubmit}
                  />
                );
              }}
            </RegisterMutation>
            <UserForm title="Iniciar Sesión" onSubmit={activateAuth} />
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};
