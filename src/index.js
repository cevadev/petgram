import React from "react";
import ReactDOM from "react-dom";

//Importamos Apollo Client
import ApolloClient from "apollo-boost";

//Apollo Provider es un componente con el que envolvemos nuestra app de manera que podremo usar apollo en cualquier parte de la app
import { ApolloProvider } from "react-apollo";

import Context from "./Context.js";

//hacemos referencia a nuestra app
import App from "./routes/App.js";

//antes de utilizar ApolloProvider debemos inicializar el client
const client = new ApolloClient({
  //pasamos la uri donde tenemos el server de graphql
  uri: "https://petgram-server-api-barcvilla-l8ya7qy99.vercel.app/graphql",
  //operacion request que es una funcion, que tiene como parametro la operacion que esta realizando
  //la propiedad request se va a ejecutar justo antes de hacer cualquier peticion al server, por lo que será aqui
  //donde recuperamos el JWToken
  request: (operation) => {
    const token = window.sessionStorage.getItem("token");
    //si el token existe o es true, pasamos el token con el bearer
    const authorization = token ? `Bearer ${token}` : "";
    //al contexto le pasamos un objeto, que contiene los headers y va a tener la autorizacion
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },

  //manejamos si el token ha expirado. si se produce un error, quitamos el token del sesion storage
  onError: (error) => {
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      //hacemos que el usuario retorne a la pantalla de inicio
      window.location.href = "/";
    }
  },
});

/**
 * Especificamos el punto de entrada de nuestra app
 * ReactDOM.render()-> recibe el componente App, recibe el document.getElementById('app')
 * ApolloClient envuelve nuestra app para permitir trabajar con GraphQL
 * Accedemos value isAuth para saber si el user está autenticado
 */
ReactDOM.render(
  <Context.Provider>
    {/**la zona del children */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
