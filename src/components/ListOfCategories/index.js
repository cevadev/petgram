import React from "react";

//importamos categories de la BD local db.json de nuestra api
import { categories } from "../../../api/db.json";
import { Category } from "../Category/index.js";

import { List, Item } from "./styles.js";

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          {/**pasamos los props que necesita el componente Category. Podriamos usar el operador spread {...category} */}
          <Category
            cover={category.cover}
            path={category.path}
            emoji={category.emoji}
          />
        </Item>
      ))}
    </List>
  );
};
