import './Navigation.css';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  let navigate = useNavigate();
  let handleScroll = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      let section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
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
