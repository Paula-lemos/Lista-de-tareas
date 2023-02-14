import { useState } from "react";

const EstadoDeLaTarea = () => {
  const [hecha, setHecha] = useState(false);

  const realizada = () => {
    setHecha(true);
  };

  return (
    <div>
      <h1 className="texto">{hecha ? "Realizada" : "Pendiente"}</h1>

      <button onClick={() => setHecha(false)} className="botonuno">
        Pendiente
      </button>

      <button onClick={realizada} className="botondos">
        Realizada
      </button>
    </div>
  );
};

export default EstadoDeLaTarea;
