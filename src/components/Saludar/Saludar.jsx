import React, { useState } from "react";

import { Boton } from "../Boton/Boton";
import { Input } from "../Input/Input";

export const Saludar = () => {
  const [InputName, setInputName] = useState("");
  const [name, setName] = useState("Usuario");

  const handleSetName = () => setName(InputName);

  return (
    <>
      <div className="Saludar">
        <div className="Ordenar">
          <Input 
            placeholder="Ingresa un Nombre"
            value={InputName}
            onChange={(event) => setInputName(event.target.value)}
            type="text"
          />
          <Boton texto="Saludar" onClick={handleSetName} />
          <h1>Bienvenido {name}</h1>
        </div>
      </div>
    </>
  );
};
