import React from "react";

import { useInputValue } from "../../hooks/useInputValue.js";

import { Form, Input, Button, Title } from "./styles.js";

/**
 *
 */
export const UserForm = ({ title, onSubmit }) => {
  //como valor inicial, string vacio
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
};
