import Formulario from "./formulario";
import UserImage from "./UserImage";

function Formu({ Tarea, imgUrl, imgAlt }) {
  return (
    <div className="user">
      <h2>{Tarea}</h2>
      <UserImage imgUrl={imgUrl} imgAlt={imgAlt} />
      <Formulario />
    </div>
  );
}

export default Formu;
