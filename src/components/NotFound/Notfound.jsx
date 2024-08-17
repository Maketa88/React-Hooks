import React from 'react';
import logo from '../../assets/notfound.jpg';
import "./Notfound.css";

export const NotFound = () => {
  return (
    <div className='imagencontenedor'>
      <img className='responsive-image' src={logo} alt="Logo" />
    </div>
  );
};
