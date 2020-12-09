import styled from "styled-components";

//importamos el Link para evitar que se recargue toda la página
import { Link as LinkRouter } from "@reach/router";

//aplicamos estilos al elemento Link
export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  /**encajamos los img */
  object-fit: cover;
  height: 75px;
  width: 75px;
`;
