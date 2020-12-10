import { useState } from "react";

/**
 * Hook personalizado
 * @param {*} initialValue -> pasamos un valor inicial
 */
export const useInputValue = (initialValue) => {
  //gestionamos el valor del input
  const [value, setValue] = useState(initialValue);
  //actualizamos el estado local
  const onChange = (event) => setValue(event.target.value);

  //retornamos un objeto
  return { value, onChange };
};
