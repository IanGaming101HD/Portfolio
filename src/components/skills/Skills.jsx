import './Skills.css';
import htmlImage from '../../assets/html.svg';
import cssImage from '../../assets/css.svg';
import javascriptImage from '../../assets/javascript.svg';
import reactImage from '../../assets/react.svg';
import bootstrapImage from '../../assets/bootstrap.svg';
import tailwindImage from '../../assets/tailwind.svg';
import nodejsImage from '../../assets/nodejs.svg';
import expressjsImage from '../../assets/express-js.svg';
import pythonImage from '../../assets/python.svg';
import djangoImage from '../../assets/django.svg';
import sqlImage from '../../assets/sql.svg';
import mongodbImage from '../../assets/mongodb.svg';
import mysqlImage from '../../assets/mysql.svg';
import postmanImage from '../../assets/postman.svg';
import gitImage from '../../assets/git.svg';
import awsImage from '../../assets/aws.svg';
import firebaseImage from '../../assets/firebase.svg';

function Skills() {
  return (
    <div id='skills-container' className='skills-container section-container'>
      <h2 id='skills' class='section-header'>
        My Skills
      </h2>
      <div>
        <div className='skill-boxes left'>
          <div className='skill-box'>
            <h3 className='skill-box-header'>Frontend development</h3>
            <div className='languages-container'>
              <div className='language-container'>
                <img className='language-icon' src={htmlImage} alt='HTML' />
                <span className='language'>HTML</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={cssImage} alt='CSS' />
                <span className='language'>CSS</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={javascriptImage} alt='JavaScript' />
                <span className='language'>JavaScript</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={reactImage} alt='React' />
                <span className='language'>React</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={bootstrapImage} alt='Bootstrap' />
                <span className='language'>Bootstrap</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={tailwindImage} alt='Tailwind' />
                <span className='language'>Tailwind</span>
              </div>
            </div>
          </div>
          <div className='skill-box'>
            <h3 className='skill-box-header'>Backend development</h3>
            <div className='languages-container'>
              <div className='language-container'>
                <img className='language-icon' src={nodejsImage} alt='Node.js' />
                <span className='language'>Node.js</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={expressjsImage} alt='Express.js' />
                <span className='language'>Express JS</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={pythonImage} alt='Python' />
                <span className='language'>Python</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={djangoImage} alt='Django' />
                <span className='language'>Django</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={mongodbImage} alt='MongoDB' />
                <span className='language'>MongoDB</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={sqlImage} alt='SQL' />
                <span className='language'>SQL</span>
              </div>
            </div>
          </div>
          <div className='skill-box stretch-box'>
            <h3 className='skill-box-header'>Tools & Databases</h3>
            <div className='languages-container'>
              <div className='language-container'>
                <img className='language-icon' src={mongodbImage} alt='MongoDB' />
                <span className='language'>MongoDB</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={mysqlImage} alt='MySQL' />
                <span className='language'>MySQL</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={postmanImage} alt='Postman' />
                <span className='language'>Postman</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={gitImage} alt='Git' />
                <span className='language'>Git</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={awsImage} alt='AWS' />
                <span className='language'>AWS</span>
              </div>
              <div className='language-container'>
                <img className='language-icon' src={firebaseImage} alt='Firebase' />
                <span className='language'>Firebase</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <h3>Coding With Passion, Precision, and Purpose</h3>
          <p>I have a strong foundation in programming, with experience in creating web applications and games using technologies like JavaScript, Python, Node.js, and MongoDB. My frontend skills include crafting responsive interfaces with HTML, CSS, and frameworks like React. I’m also familiar with backend development, managing APIs, and databases. Beyond coding, my problem-solving mindset and attention to detail allow me to tackle challenges efficiently, whether it's debugging, designing algorithms, or optimizing performance. I thrive in both individual projects and collaborative team environments.</p>
          <div class='experience-box'>
            <span className='years'>9</span>
            <span>Years Of Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
