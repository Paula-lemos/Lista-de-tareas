import { useState } from "react";

function Formulario() {
  const [formValues, setFormValues] = useState({ task: "", descripcion: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.task.length < 3 || !formValues.descripcion) {
      alert(
        "La tarea debe tener al menos 3 caracteres y se requiere una descripción"
      );
      return;
    }
    console.log("Tarea añadida:", formValues.task, formValues.descripcion);
    setFormValues({ task: "", descripcion: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-task" className="form-label">
        <button type="submit">Añadir tarea</button>
      </label>
      <input
        placeholder="Escribe tu próxima Tarea"
        type="text"
        name="task"
        value={formValues.task}
        onChange={handleChange}
      />
      {formValues.task.length < 3 && (
        <p style={{ color: "red" }}>La longitud debe ser mayor a 3</p>
      )}
      <label htmlFor="input-descripcion" className="form-label">
        <h5>Añadir una descripción</h5>
      </label>
      <input
        placeholder="Añade una descripción"
        type="text"
        name="descripcion"
        value={formValues.descripcion}
        onChange={handleChange}
      />
    </form>
  );
}

export default Formulario;
