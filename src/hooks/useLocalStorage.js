import React, { useState } from "react";

// hooks useLocalStorage
function useLocalStorage(key, initialValue) {
  //añadimos un state local para manejar los likes.
  const [storedValue, setValue] = useState(() => {
    //Revisamos el local storage para recuperar el valor de la key unica llamada key
    try {
      const item = window.localStorage.getItem(key);
      //el localstorage almacena un string, para obtener el valor almacenado hay qu hacer un parse
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  //atualizamos el local storage
  //funcion para guardar likes en el local storage
  const setLocalStorage = (value) => {
    try {
      //local storage maneja es un map de clave / valor
      window.localStorage.setItem(key, JSON.stringify(value));
      //actualizamso el local state
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  //el hook retorna: el valor guardado y una forma de actualizar el local storage
  return [storedValue, setLocalStorage];
}

export default useLocalStorage;
