import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Boton } from '../Boton/Boton';


export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ID, setID] = useState('');
  const [email, setEmail] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = { nombre, usuario, telefono, ID, email };

    const usuarioExiste = usuarios.some(user => 
      user.nombre === nombre && 
      user.usuario === usuario && 
      user.telefono === telefono && 
      user.ID === ID && 
      user.email === email
    );

    if (!usuarioExiste) {
      setUsuarios([...usuarios, nuevoUsuario]);
      setNombre('');
      setUsuario('');
      setTelefono('');
      setID('');
      setEmail('');
      setMensajeError('');
    } else {
      setMensajeError(alert('El usuario ya existe.'));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input  type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <Input  type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <Input  type="Number" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}  />
        <Input type="Number" placeholder="ID" value={ID} onChange={(e) => setID(e.target.value)} />
        <Input  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Boton texto="Enviar" onClick={handleSubmit} />
      </form>

      {mensajeError && <div style={{ color: 'red', marginTop: '10px' }}>{mensajeError}</div>}

      <ul>
        {usuarios.map((user, index) => (
          <li className='Listado' key={index}>
            {user.nombre} - {user.usuario} - {user.telefono} - {user.ID} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};
