import './About.css';
import DownloadCVButton from './DownloadCVButton.jsx';
import image from '../assets/esports.png';
// import image from '../assets/react-logo.png';

function About() {
  return (
    <div id='about-container' className='about-container section-container'>
      <h2 id='about' class='section-header'>
        About me
      </h2>
      <div>
        <div className='left'>
          <h3>Game Enthusiast</h3>
          <p>I’m passionate about exploring the world of technology, creativity, and competition. Coding has become my way of turning ideas into reality, from building games to crafting innovative solutions. Beyond the keyboard, I’m an avid basketball player and a strategic thinker in chess. My competitive spirit also drives me in esports, where I proudly represent my team in Valorant. Whether it's solving problems, playing games, or competing, I thrive on challenges that fuel growth and excitement.</p>
          <DownloadCVButton />
        </div>
        <div className='right'>
          <img src={image} alt='test'></img>
        </div>
      </div>
    </div>
  );
}

export default About;
