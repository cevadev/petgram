import React, { Fragment } from "react";

import Context from "../Context.js";
import { UserForm } from "../components/UserForm/index.js";
import { RegisterMutation } from "../containers/RegisterMutation.js";
import { LoginMutation } from "../containers/LoginMutation.js";

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
                y register es lo que queremos que se ejecute, tambien nos llega la data, el loading y error*/}
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

                //si error es true, mostramos el mensaje de error
                const errorMsg =
                  error &&
                  "No se puede registrar el usuario. Ya existe o los datos no son correctos.";

                /**rederizamos el formulario de registro. disabled se activa cuando estamos cargando */
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

            <LoginMutation>
              {(login, { loading, error }) => {
                const handleSubmit = ({ email, password }) => {
                  const input = { email, password };
                  login({ variables: { input } }).then(({ data }) =>
                    activateAuth(data.login)
                  );
                };
                const errorMsg =
                  error &&
                  "No se puede iniciar sesión. El usuario no existe o el password no es correcto.";
                {
                  /**retornamos el componente user form */
                }
                return (
                  <UserForm
                    disabled={loading}
                    error={errorMsg}
                    title="Iniciar sesión"
                    onSubmit={handleSubmit}
                  />
                );
              }}
            </LoginMutation>
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};
