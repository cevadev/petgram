import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { Home } from "../pages/Home.js";
import { Detail } from "../pages/Detail.js";
import { Favs } from "../pages/Favs.js";
import { User } from "../pages/User.js";
import { NotRegisteredUser } from "../pages/NotRegisteredUser.js";
import Logo from "../components/Logo/index.js";
import { NavBar } from "../components/NavBar/index.js";

//import estilos globales
import { GlobalStyle } from "../styles/GlobalStyles.js";

/**
 * Si el usuario está registrado por ver las paginas de favs y user, si no esta registrado verá solo el home
 * UserLogged va recibir el children, el children sera lo que tiene que renderizar como una funcion
 */
const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};

function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
        {/**rederizado condicional, a UserLogged le pasamos el children*/}
        {({ isAuth }) =>
          /**si esta autenticado, renderizamos un router con acceso a favs y user de lo contrario NotRegisteredUser */
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </div>
  );
}

export default App;
