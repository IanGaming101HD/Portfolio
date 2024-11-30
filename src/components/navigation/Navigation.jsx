import './Navigation.css';
import { useNavigate } from 'react-router-dom';
import { moveToTop, moveTo } from '../../Utils.js';

function Navigation() {
  let navigate = useNavigate();
  let handleScroll = (sectionName) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    if (sectionName === 'home') {
      moveToTop();
    } else {
      moveTo(sectionName)
    }
  };

  return (
    <nav className='navigation'>
      <ul>
        <li>
          <a className='current_page' onClick={() => handleScroll('home')}>Home</a>
        </li>
        <li>
          <a onClick={() => handleScroll('about')}>About</a>
        </li>
        <li>
          <a onClick={() => handleScroll('skills')}>Skills</a>
        </li>
        <li>
          <a onClick={() => handleScroll('services')}>Services</a>
        </li>
        <li>
          <a onClick={() => handleScroll('experience')}>Experience</a>
        </li>
        <li>
          <a onClick={() => handleScroll('projects')}>Projects</a>
        </li>
        <li>
          <a onClick={() => handleScroll('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
