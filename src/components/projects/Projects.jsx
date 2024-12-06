import './Projects.css';
import chessImage from '../../assets/chess.png';
import spaceInvadersImage from '../../assets/space-invaders.png';
import discordBotImage from '../../assets/discord-bot.png';
import pongImage from '../../assets/pong.png';
import snakeImage from '../../assets/snake.png';
import pokerImage from '../../assets/poker.png';
import ecommercePlatformImage from '../../assets/ecommerce-platform.png';
import tabsSaverExtensionImage from '../../assets/tabs-saver-extension.png';
import portfolioImage from '../../assets/portfolio.png';
import fullStackWebsiteImage from '../../assets/full-stack-website.png';
import connect4Image from '../../assets/connect-4.png';
import flagGuesserImage from '../../assets/flag-guesser.png';
import wordleImage from '../../assets/wordle.png';
import hangmanImage from '../../assets/hangman.png';
import flashcardToolImage from '../../assets/flashcard-tool.png';
import tictactoeImage from '../../assets/tictactoe.png';
import openNewTab from '../../utils/openNewTab.js';

function Projects() {
  return (
    <div id='projects-container' className='projects-container section-container'>
      <h2 id='projects' className='section-header'>
        My Projects
      </h2>
      <div className='project-boxes'>
        <div className='project-box'>
          <img className='project-image' src={chessImage} alt='Chess Project' />
          <span className='project-header'>Chess</span>
          <span className='project-description'>A two-player chess game with customizable piece skins and highlighted move options.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/chess')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={spaceInvadersImage} alt='Space Invaders Project' />
          <span className='project-header'>Space Invaders</span>
          <span className='project-description'>A classic Space Invaders game built with JavaScript and canvas.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/python-space-invaders')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={discordBotImage} alt='Discord Bot Project' />
          <span className='project-header'>Discord Bot</span>
          <span className='project-description'>A feature-rich Discord bot for server management and entertainment.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/discord-bot')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={pongImage} alt='Pong Project' />
          <span className='project-header'>Pong</span>
          <span className='project-description'>A modern implementation of the classic Pong game with advanced mechanics.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/pong')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={snakeImage} alt='Snake Project' />
          <span className='project-header'>Snake</span>
          <span className='project-description'>A simple yet addictive snake game with colorful visuals and responsive controls.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/snake-game')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={pokerImage} alt='Poker Project' />
          <span className='project-header'>Poker</span>
          <span className='project-description'>A poker game with various modes and multiplayer capabilities.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/poker')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={ecommercePlatformImage} alt='E-commerce Platform' />
          <span className='project-header'>E-commerce Platform</span>
          <span className='project-description'>A full-stack e-commerce platform with advanced shopping cart features.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/verification-services')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={tabsSaverExtensionImage} alt='Tab Saver Browser Extension' />
          <span className='project-header'>Tab Saver Browser Extension</span>
          <span className='project-description'>A browser extension to save and restore tabs for productivity.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/tabs-saver-chrome-extension')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={portfolioImage} alt='Portfolio Project' />
          <span className='project-header'>Portfolio</span>
          <span className='project-description'>My personal portfolio showcasing my projects and skills.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/portfolio')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={fullStackWebsiteImage} alt='Full-stack Website' />
          <span className='project-header'>Full-stack Website</span>
          <span className='project-description'>A responsive full-stack website built with modern frameworks.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/full-stack-website')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={connect4Image} alt='Connect 4 Project' />
          <span className='project-header'>Connect 4</span>
          <span className='project-description'>A digital version of the Connect 4 board game with a sleek UI.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/connect-4')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={flagGuesserImage} alt='Flag Guesser Game' />
          <span className='project-header'>Flag Guesser Game</span>
          <span className='project-description'>Test your knowledge of world flags in this fun guessing game.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/flag-guesser')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={wordleImage} alt='Wordle Project' />
          <span className='project-header'>Wordle</span>
          <span className='project-description'>A Wordle clone with additional customization options.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/wordle')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={hangmanImage} alt='Hangman Project' />
          <span className='project-header'>Hangman</span>
          <span className='project-description'>A fun and interactive hangman game with various word categories.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/hangman')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={flashcardToolImage} alt='Flashcard Tool' />
          <span className='project-header'>Flashcard Revision Tool</span>
          <span className='project-description'>A flashcard tool for revising and retaining information effectively.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/flashcard-revision-tool')}>
            Review Project
          </button>
        </div>
        <div className='project-box'>
          <img className='project-image' src={tictactoeImage} alt='Tic Tac Toe Project' />
          <span className='project-header'>Tic Tac Toe</span>
          <span className='project-description'>A simple implementation of the classic Tic Tac Toe game.</span>
          <button className='review-project-button' onClick={() => openNewTab('https://github.com/iangaming101hd/tictactoe')}>
            Review Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;