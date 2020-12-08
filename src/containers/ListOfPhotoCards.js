//importamos nuestro high order component withPhotos
import { withPhotos } from "../hoc/withPhotos.js";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards/index.js";

//a la funcion withPhotos le pasamos por props como parametro el componente ListOfPhotoCardsComponent
//este componente puede recibir por props parametros para poder filtras las fotos por ejmplo filtrar por categoria
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
