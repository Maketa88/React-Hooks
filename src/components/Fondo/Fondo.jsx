import { useState } from "react";
import { Boton } from "../Boton/Boton";

export function Color() {
  const [color, setColor] = useState('white');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
  };

  return (
    <>
      <div className="Color" style={{ height: '100vh', backgroundColor: color }}>
        <div className="Orden">
          <h1>Generar Color Aleatorio</h1>
          <Boton 
            texto="Color Aleatorio" 
            onClick={generateRandomColor} 
            type="text"
            
          />
        </div>
      </div>
    </>
  );
}
