import React, { createContext, useState } from "react";

const Context = createContext();

/**
 * manejamos el cambio de la prop isAuth de forma dinámica
 * componente Provider -> recibe por props el children. Este provider es el mismo del Context.Provider pero con algunos cambios
 */
const Provider = ({ children }) => {
  //manejamos un state para saber si el user esta autenticado o no. por defecto no lo estará
  const [isAuth, setIsAuth] = useState(false);

  //value-> es lo que vamos a pasar como props al Provider, asi este objeto value podremos acceder en toda la app
  const value = {
    //isAuth para saber si el user esta autenticado
    isAuth,

    //metodo activateAuth -> es una funcion que actualiza el state para decir que el usuario a pasado a estar autenticado
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  //retornamos el context.provider que estamos utilizando
  return (
    <Context.Provider value={value}>
      {/**el children es lo que estamos pasando como prop al provider */}
      {children}
    </Context.Provider>
  );
};

//exportamos un objeto que contiene el Provider y el Consumer
export default {
  Provider,
  Consumer: Context.Consumer,
};
