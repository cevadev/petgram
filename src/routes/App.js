import React, { Fragment, useContext, Suspense } from "react";
import { Redirect, Router } from "@reach/router";

import { Home } from "../pages/Home.js";
import { Detail } from "../pages/Detail.js";
//import { Favs } from "../pages/Favs.js";
import { User } from "../pages/User.js";
import { NotRegisteredUser } from "../pages/NotRegisteredUser.js";
import Logo from "../components/Logo/index.js";
import { NavBar } from "../components/NavBar/index.js";
import { Context } from "../Context.js";
import { NotFound } from "../pages/NotFound.js";

//import estilos globales
import { GlobalStyle } from "../styles/GlobalStyles.js";

/**
 * Si el usuario está registrado por ver las paginas de favs y user, si no esta registrado verá solo el home
 * UserLogged va recibir el children, el children sera lo que tiene que renderizar como una funcion
 */
/* const UserLogged = ({ children }) => {
  return children({ isAuth: false });
}; */

/**vamos a importar favoritos solo cuando los necesitemos utilizando React.lazy()
 * le pasamos a React.lazy() una funcion anonima que retorna un import dinámico
 */
const Favs = React.lazy(() => import("../pages/Favs"));

function App() {
  //recuperamos isAuth del Context para saber si el usuario esta autenticado
  const { isAuth } = useContext(Context);
  return (
    /**en lugar de <div></div> utilizamos <Suspense></Suspense> que nos permitirá renderizar la app mientras
     * el componente Favs esta en suspensión.
     *
     * podemos reemplazar el suspense por el div y comentar la linea 28 y quitar los comentarios de la linea 6
     * Ir a la pagina Favs.js comentar la parte de export default y quitar comentarios a la parte de export const
     * para que todo funcione sin React.lazy y Suspense
     *
     * Suspense utiliza un props llamada fallback que es lo que va a renderizar mientras está cargando el componente
     */
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        {/**si se ingresa una ruta no controlada, se mostrará la pagina notfound */}
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {
          /**si el usuario no esta autenticado, redireccionamos de fav a login */
          !isAuth && <Redirect from="/favs" to="/login" />
        }
        {!isAuth && <Redirect from="/user" to="/login" />}
        {/**si el usuario está autenticado lo redirigimos del login al home */}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
}

export default App;
