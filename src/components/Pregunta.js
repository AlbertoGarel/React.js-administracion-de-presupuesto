import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({
  guardarRestante,
  guardaPresupuesto,
  actualizarPregunta
}) => {
  //define state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //Function define budget
  const definirPresupuesto = ev => {
    guardarCantidad(parseInt(ev.target.value, 10));
  };

  //submit
  const agregarPresupuesto = ev => {
    ev.preventDefault();

    //validate
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    //success
    guardarError(false);
    guardaPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Indica tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          className="u-full-width"
          type="number"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardaPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
};

export default Pregunta;
