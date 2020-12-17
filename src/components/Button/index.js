import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

export const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

Button.prototype = {
  onClick: PropTypes.func,
  //la proptype node significa que es cualquier cosa que react puede renderizar
  children: PropTypes.node.isRequired,
};
