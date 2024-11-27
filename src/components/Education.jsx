import './Education.css';
import image from '../assets/react-logo.png';

function Education() {
  return (
    <div id='education-container' className='education-container section-container'>
      <h2 id='education' class='section-header'>
        Education
      </h2>
      <div>
        <div className='left'>
          <img src={image} alt='test'></img>
        </div>
        <div className='right'>
          <h3>I'm a full stack web developer</h3>
          <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
