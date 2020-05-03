import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";

function App() {
  //Define state
  const [presupuesto, guardaPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          <Pregunta
            guardaPresupuesto={guardaPresupuesto}
            guardarRestante={guardarRestante}
          />
          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
