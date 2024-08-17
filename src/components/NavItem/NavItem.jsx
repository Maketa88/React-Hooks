import {NavLink} from 'react-router-dom'

export const NavItem = ({to,content}) => {
 return (
    <li><NavLink to={to}>{content}</NavLink></li>)
  
}
