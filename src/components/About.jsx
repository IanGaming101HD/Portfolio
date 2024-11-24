import './About.css';
// import image from '../assets/esports.png';
import image from '../assets/react-logo.png';

function About() {
  return (
    <div>
      <div className='left'>
        <h3>Game Enthusiast</h3>
        <p>I’m passionate about exploring the world of technology, creativity, and competition. Coding has become my way of turning ideas into reality, from building games to crafting innovative solutions. Beyond the keyboard, I’m an avid basketball player and a strategic thinker in chess. My competitive spirit also drives me in esports, where I proudly represent my team in Valorant. Whether it's solving problems, playing games, or competing, I thrive on challenges that fuel growth and excitement.</p>
        <button className='download-cv-button'>Download CV</button>
      </div>
      <div className='right'>
        <img src={image} alt='test'></img>
      </div>
    </div>
  );
}

export default About;
