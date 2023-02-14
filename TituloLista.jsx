import "../App";
import UserImage from "./UserImage";
import EstadoDeLaTarea from "./state";

function TituloLista({ Tarea, imgUrl, imgAlt }) {
  return (
    <div className="user">
      <h2>{Tarea}</h2>
      <UserImage imgUrl={imgUrl} imgAlt={imgAlt} />
      <EstadoDeLaTarea />
    </div>
  );
}

export default TituloLista;
