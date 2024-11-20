import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/education'>Education</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
