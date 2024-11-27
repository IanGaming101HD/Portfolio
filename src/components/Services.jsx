import './Services.css';

function Services() {
  return (
    <div id='services-container' className='services-container section-container'>
      <h2 id='services' class='section-header'>
        My Services
      </h2>
      <div className='service-boxes'>
        <div className='service-box'>
          <span className='service-header'>Web Development</span>
          <span className='service-description'>Developed this portfolio, and created many other applications such as a web dashboard for managing Discord Bots, browser extensions and recently created an interactive chess game for my NEA project.</span>
        </div>
        <div className='service-box'>
          <span className='service-header'>Desktop Applications</span>
          <span className='service-description'>Developed numerous desktop applications such as a flashcard revision tool, an autoclicker, and an E-commerce Platform.</span>
        </div>
        <div className='service-box'>
          <span className='service-header'>Game Development</span>
          <span className='service-description'>Including the Chess game, I have created many projects using PyGame, Canvas and other tools such as Pong, Snake and Space Invaders.</span>
        </div>
        <div className='service-box'>
          <span className='service-header'>Game Scripting</span>
          <span className='service-description'>Scripted game mechanics and designed an interactive GUI for players using Roblox, Unity.</span>
        </div>
        <div className='service-box'>
          <span className='service-header'>Video Editing</span>
          <span className='service-description'>I have created included montages, special effects and high quality content, with the use of tools such as Adobe Premiere Pro and Adobe After Effects.</span>
        </div>
        <div className='service-box'>
          <span className='service-header'>Databases</span>
          <span className='service-description'>I have worked with many different forms of databases from spreadsheets and JSONs to using SQL queries to manipulate data in which includes creating, updating, or deleting data or even for searching and sorting that data. Also, have experience with MongoDB as well as MySQL to help store information on projects such as Discord Bots.</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
