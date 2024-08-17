import React from "react";
import './Boton.css'


export function Boton({ texto, onClick }) {
  return (
    <div className="BotonPrincipal">
      <div className="OrdenarBoton">
        <button className="BotonPrinci" onClick={onClick}>{texto}</button>
      </div>
    </div>
  );
}
