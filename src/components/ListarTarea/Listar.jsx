import { useState } from 'react';

import { Input } from '../Input/Input';
import { Boton } from '../Boton/Boton';




export function ListarTarea() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({ nombre: '', descripcion: '' });

  const agregarTarea = () => {
    if (tarea.nombre && tarea.descripcion) {
      setTareas([...tareas, tarea]);
      setTarea({ nombre: '', descripcion: '' });
    }
  };

  return (
    <>
     
       <Input
        type="text"
        placeholder="Nombre de la tarea"
        value={tarea.nombre}
        onChange={(e) => setTarea({ ...tarea, nombre: e.target.value })}
      />
     
      <Input
        type="text"
        placeholder="Descripción"
        value={tarea.descripcion}
        onChange={(e) => setTarea({ ...tarea, descripcion: e.target.value })}
      />
      
      <Boton texto="Agregar" onClick={agregarTarea} />
      
      <ul>
        {tareas.map((t, index) => (
          <li className='Listado' key={index}>
            <strong>Tarea Pendiente:</strong> {t.nombre} <br />
            <strong>Descripción:</strong> {t.descripcion}
          </li>
        ))}
      </ul>
    </>
  );
}

