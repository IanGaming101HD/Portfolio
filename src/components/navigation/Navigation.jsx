import './Navigation.css';
import { useNavigate } from 'react-router-dom';
import moveToTop from '../../utils/moveToTop.js';
import moveTo from '../../utils/moveTo.js';

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
          <button className='current_page' onClick={() => handleScroll('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll('about')}>About</button>
        </li>
        <li>
          <button onClick={() => handleScroll('skills')}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleScroll('services')}>Services</button>
        </li>
        <li>
          <button onClick={() => handleScroll('experience')}>Experience</button>
        </li>
        <li>
          <button onClick={() => handleScroll('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleScroll('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
