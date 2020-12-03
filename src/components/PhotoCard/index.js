import React from "react";

import { ImgWrapper, Img, Button } from "./styles.js";

//importamos iconos de material design de react-icons
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
/**
 * Props del componente PhotoCard: id, likes, srcImage
 */
export const PhotoCard = ({
  id,
  likes = 0,
  srcImage = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
}) => {
  return (
    <article>
      {/**nos al dar clik en el anchor nos lleva a detalle de la foto */}
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={srcImage} />
        </ImgWrapper>
      </a>
      <Button type="button">
        <MdFavoriteBorder size="25" />
        {likes} likes
      </Button>
    </article>
  );
};
