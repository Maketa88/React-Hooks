import { NavItem } from "../NavItem/NavItem";
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <ul className="Lista">
        <NavItem to='/' content="Practicando Hooks"></NavItem>
        <NavItem to='/Saludar' content="Saludar"></NavItem>
        <NavItem to='/Operaciones' content="Calculadora"></NavItem>
        <NavItem to='/Fondo' content="Cambiar Fondo"></NavItem>
        <NavItem to='/Formulario' content="Formulario"></NavItem>
        <NavItem to='/ListarTarea' content="Listar - Tarea"></NavItem>
      </ul>
    </nav>
  );
};
