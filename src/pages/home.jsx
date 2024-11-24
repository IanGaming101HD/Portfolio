import './Home.css';
import Header from '../components/Header.jsx';
import TypingEffect from '../components/TypingEffect.jsx';
import SocialButton from '../components/SocialButton.jsx';
import IMG from '../assets/sung-jin-woo.png';
import IMG2 from '../assets/esports.png';
import IMG3 from '../assets/react-logo.png';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <div id='home-container' className='home-container section-container'>
          <div>
            <div className='left'>
              <img className='background-img' src={IMG} alt='test'></img>
            </div>
            <div className='right'>
              <h2>
                Hi, I'm <span>Ian</span>
              </h2>
              <h3>
                I'm a <TypingEffect words={['Full Stack Web Developer', 'Youtuber', 'Gamer']} />
              </h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
              <div className='social-buttons'>
                <SocialButton platform='linkedin' />
                <SocialButton platform='indeed' />
                <SocialButton platform='github' />
                <SocialButton platform='twitter' />
                <SocialButton platform='instagram' />
              </div>
              <button className='hire-button'>Hire me</button>
            </div>
          </div>
        </div>
        <div id='about-container' className='about-container section-container'>
          <h2 id='about' class='exception'>
            About me
          </h2>
          <div>
            <div className='left'>
              <h3>Game Enthusiast</h3>
              <p>I’m passionate about exploring the world of technology, creativity, and competition. Coding has become my way of turning ideas into reality, from building games to crafting innovative solutions. Beyond the keyboard, I’m an avid basketball player and a strategic thinker in chess. My competitive spirit also drives me in esports, where I proudly represent my team in Valorant. Whether it's solving problems, playing games, or competing, I thrive on challenges that fuel growth and excitement.</p>
              <button className='download-cv-button'>Download CV</button>
            </div>
            <div className='right'>
              {/* <img src={IMG2} alt='test'></img> */}
              <img src={IMG3} alt='test'></img>
            </div>
          </div>
        </div>
        <div id='skills-container' className='skills-container section-container'>
          <h2 id='skills' class='exception'>
            My Skills
          </h2>
          <div>
            <div className='language-boxes left'>
              <div className='language-box'>
                <span className='language'>HTML</span>
                <span className='percentage'>90%</span>
              </div>
              <div className='language-box'>
                <span className='language'>CSS</span>
                <span className='percentage'>80%</span>
              </div>
              <div className='language-box'>
                <span className='language'>JavaScript</span>
                <span className='percentage'>70%</span>
              </div>
              <div className='language-box'>
                <span className='language'>Python</span>
                <span className='percentage'>60%</span>
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
        <div id='services-container' className='services-container section-container'>
          <h2 id='services' class='exception'>
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
        <div id='education-container' className='education-container section-container'>
          <h2 id='education' class='exception'>
            Education
          </h2>
          <div>
            <div className='left'>
              <img src={IMG3} alt='test'></img>
            </div>
            <div className='right'>
              <h3>I'm a full stack web developer</h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
            </div>
          </div>
        </div>
        <div id='experience-container' className='experience-container section-container'>
          <h2 id='experience' class='exception'>
            My Experience
          </h2>
          <div>
            <div className='left'>
              <h3>I'm a full stack web developer</h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
            </div>
            <div className='right'>
              <img src={IMG3} alt='test'></img>
            </div>
          </div>
        </div>
        <div id='contact-container' className='contact-container section-container'>
          <h2 id='contact' class='exception'>
            Contact Me
          </h2>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
