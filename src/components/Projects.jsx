import './Projects.css';
import image from '../assets/sung-jin-woo.png';
// import image from '../assets/django.svg';

function Projects() {
  return (
    <div id='projects-container' className='projects-container section-container'>
      <h2 id='projects' class='section-header'>
        My projects
      </h2>
      <div className='project-boxes'>
        <div className='project-box'>
          <img className='project-icon' src={image} alt='test' />
          <span className='project-header'>Web Development</span>
          <span className='project-description'>Developed this portfolio, and created many other applications such as a web dashboard for managing Discord Bots, browser extensions and recently created an interactive chess game for my NEA project.</span>
        </div>
        <div className='project-box'>
          <img className='project-icon' src={image} alt='test' />
          <span className='project-header'>Desktop Applications</span>
          <span className='project-description'>Developed numerous desktop applications such as a flashcard revision tool, an autoclicker, and an E-commerce Platform.</span>
        </div>
        <div className='project-box'>
          <img className='project-icon' src={image} alt='test' />
          <span className='project-header'>Game Development</span>
          <span className='project-description'>Including the Chess game, I have created many projects using PyGame, Canvas and other tools such as Pong, Snake and Space Invaders.</span>
        </div>
        <div className='project-box'>
          <img className='project-icon' src={image} alt='test' />
          <span className='project-header'>Game Scripting</span>
          <span className='project-description'>Scripted game mechanics and designed an interactive GUI for players using Roblox, Unity.</span>
        </div>
        <div className='project-box'>
          <img className='project-icon' src={image} alt='test' />
          <span className='project-header'>Video Editing</span>
          <span className='project-description'>I have created included montages, special effects and high quality content, with the use of tools such as Adobe Premiere Pro and Adobe After Effects.</span>
        </div>
        <div className='project-box'>
          <img className='project-icon' src={image} alt='test' />
          <span className='project-header'>Databases</span>
          <span className='project-description'>I have experience working with a variety of databases, ranging from simple spreadsheets and JSON files to more complex systems like SQL. I’ve utilized SQL extensively for tasks such as creating, updating, deleting, searching, and sorting data. Additionally, I have hands-on experience with MongoDB and MySQL, which I’ve used to store and manage information for various projects, including developing Discord Bots.</span>
        </div>
      </div>
    </div>
  );
}

export default Projects;