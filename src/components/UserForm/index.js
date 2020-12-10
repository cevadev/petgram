import React, { Fragment } from "react";

import { useInputValue } from "../../hooks/useInputValue.js";

import { Error, Form, Input, Button, Title } from "./styles.js";

/**
 *
 */
export const UserForm = ({ disabled, error, title, onSubmit }) => {
  //como valor inicial, string vacio
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    //evitamos que el formulario haga un post por defecto
    event.preventDefault();
    //para pasar unicamente el valor de email y password escribimos email: email.value, password: password.value
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        {/**2da forma utilizando el rest operator ya que las props de password son value y onChange que coinciden con los nombres
          de las propiedades por lo que podemos pasar todas las propiedades del objeto con el rest operator (...)
          por lo que value y onChange se parasa como props a los inputs*/}
        <Input placeholder="Password" type="password" {...password} />
        <Button>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
