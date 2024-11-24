import './Home.css';
import Header from '../components/Header.jsx';
import TypingEffect from '../components/TypingEffect.jsx';
import SocialButton from '../components/SocialButton.jsx';
import IMG from '../assets/sung-jin-woo.png';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Services from '../components/Services.jsx';
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
          <h2 id='about' class='section-header'>
            About me
          </h2>
          <About />
        </div>
        <div id='skills-container' className='skills-container section-container'>
          <h2 id='skills' class='section-header'>
            My Skills
          </h2>
        <Skills />
        </div>
        <div id='services-container' className='services-container section-container'>
          <h2 id='services' class='section-header'>
            My Services
          </h2>
          <Services />
        </div>
        <div id='education-container' className='education-container section-container'>
          <h2 id='education' class='section-header'>
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
          <h2 id='experience' class='section-header'>
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
          <h2 id='contact' class='section-header'>
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
