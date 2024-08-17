import React, { useState } from "react";

import { Boton } from "../Boton/Boton";
import { Input } from "../Input/Input";

export const Operaciones = () => {
  const [InputUno, setInputUno] = useState(0);
  const [InputDos, setInputDos] = useState(0);
  const [Resultado, setResultado] = useState(0);

  const Sumar = () => setResultado(InputUno + InputDos);
  const Restar = () => setResultado(InputUno - InputDos);
  const Dividir = () => setResultado(InputUno / InputDos);
  const Multiplicar = () => setResultado(InputUno * InputDos);

  return (
    <>
      <Input
        placeholder="Ingresa un Numero"
        onChange={(event) => setInputUno(event.target.value)}
        type="Number"
      />
      <Input
        placeholder="Ingresa un Numero"
        onChange={(event) => setInputDos(event.target.value)}
        type="Number"

      />
      <Boton texto="Sumar" onClick={Sumar} />
      <Boton texto="Restar" onClick={Restar} />
      <Boton texto="Dividir" onClick={Dividir} />
      <Boton texto="Multiplicar" onClick={Multiplicar} />
      <h1>{Resultado}</h1>
    
    </>
  );
};
