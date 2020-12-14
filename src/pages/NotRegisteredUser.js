import React, { Fragment, useContext } from "react";
//con Context es un import nombrado, siempre que importemos un export nombreado debmos importarlo entre llaves
import { Context } from "../Context.js";
import { UserForm } from "../components/UserForm/index.js";
import { RegisterMutation } from "../containers/RegisterMutation.js";
import { LoginMutation } from "../containers/LoginMutation.js";

export const NotRegisteredUser = () => {
  //leemos uno de los value de nuestro contexto (archivo Context.js), en nuestro caso sera activateAuth
  const { activateAuth } = useContext(Context);
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
            register({ variables })
              .then(({ data }) => {
                //la promesa responde (response) un objeto data con su propiedad data que a su vez tiene una propiedad
                //data que contiene la proiedad signup que contiene un javascript webtoken, entonces recuperamos la
                //propiedad signup
                //console.info(response);
                const { signup } = data;
                activateAuth(signup);
              })
              .catch((error) => {
                console.error(
                  "No se puede registrar el usuario. Ya existe o los datos no son correctos"
                );
              });
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
        {(login, { data, loading, error }) => {
          /**hacemos el submit del formulario */
          const handleSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            /**llamamos a la mutacion login, pasamos las variables y nos retorna una promesa
                     cuando la promesa se resolvía, autenticamos el usuario */
            login({ variables })
              .then((data) => {
                //la promesa nos responde un objeto data con su propiedad login que es un Javascript web token que se retorna
                //al iniciar la sesion, con dicho token sabemos que el usuario está autenticado, por ello en lugar
                //de colocar response, tomaremos el objeto data con su propiedad data recuperamos la propiedad login
                //console.info(response);
                const { login } = data;
                //le pasamos el login que contiene el webtoken
                activateAuth(login);
              })
              .catch((error) => {
                console.error(
                  "No se puede iniciar sesión. El usuario no existe o el password no es el correcto"
                );
              });
          };

          const errorMsg =
            error &&
            "No se puede iniciar sesión. El usuario no existe o el password no es el correcto.";
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
};
