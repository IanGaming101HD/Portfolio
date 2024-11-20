import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'current_page' : '')} to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'current_page' : '')} to='/services'>Services</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'current_page' : '')} to='/skills'>Skills</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'current_page' : '')} to='/education'>Education</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'current_page' : '')} to='/experience'>Experience</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'current_page' : '')} to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
