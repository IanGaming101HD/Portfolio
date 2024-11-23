import './Navigation.css';

function Navigation() {
  let handleScroll = (id) => {
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
          <a onClick={() => handleScroll('home')}>Home</a>
        </li>
        <li>
          <a onClick={() => handleScroll('services')}>Services</a>
        </li>
        <li>
          <a onClick={() => handleScroll('skills')}>Skills</a>
        </li>
        <li>
          <a onClick={() => handleScroll('education')}>Education</a>
        </li>
        <li>
          <a onClick={() => handleScroll('experience')}>Experience</a>
        </li>
        <li>
          <a onClick={() => handleScroll('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
