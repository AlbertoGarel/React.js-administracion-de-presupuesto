import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ agregarNuevoGasto }) => {
  //states
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //expenditures
  const agregarGasto = ev => {
    ev.preventDefault();

    //validate
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //build expenditures
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    };

    //send expenditures to principal component
    agregarNuevoGasto(gasto);

    //form reset
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          classname="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={ev => guardarNombre(ev.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          classname="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={ev => guardarCantidad(parseInt(ev.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
        />
      </div>
    </form>
  );
};

export default Formulario;
