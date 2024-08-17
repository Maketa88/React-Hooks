import React from "react";
import './Input.css'



export function Input({ placeholder, value, onChange,type }) {
  return (
    <div className="BotonPrincipal">
      <div className="OrdenarBoton">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
