import React from "react";
import ReactDOM from "react-dom";

//Importamos Apollo Client
import ApolloClient from "apollo-boost";

//Apollo Provider es un componente con el que envolvemos nuestra app de manera que podremo usar apollo en cualquier parte de la app
import { ApolloProvider } from "react-apollo";

//hacemos referencia a nuestra app
import App from "./routes/App.js";

//antes de utilizar ApolloProvider debemos inicializar el client
const client = new ApolloClient({
  //pasamos la uri donde tenemos el server de graphql
  uri: "https://petgram-server-api-barcvilla-l8ya7qy99.vercel.app/graphql",
});

/**
 * Especificamos el punto de entrada de nuestra app
 * ReactDOM.render()-> recibe el componente App, recibe el document.getElementById('app')
 * ApolloClient envuelve nuestra app para permitir trabajar con GraphQL
 */
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
