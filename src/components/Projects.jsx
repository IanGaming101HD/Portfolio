import './Projects.css';
import image from '../assets/sung-jin-woo.png';
// import image from '../assets/django.svg';

function Projects() {
  let handleClick = () => {
    console.log('hi')
  }

  return (
    <div id='projects-container' className='projects-container section-container'>
      <h2 id='projects' class='section-header'>
        My projects
      </h2>
      <div className='project-boxes'>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Chess</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Space Invaders</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Discord Bot</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Pong</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Snake</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>E-commerce platform</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Tab's Saver Browser Extension</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Portfolio</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Full stack website</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Connect 4</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Flag guesser game</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Wordle</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Hangman</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>Flashcards revision tool</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={image} alt='test' />
          <span className='project-header'>TicTacToe</span>
          <span className='project-description'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</span>
          <button class='review-project-button' onClick={handleClick}>Review Project</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;