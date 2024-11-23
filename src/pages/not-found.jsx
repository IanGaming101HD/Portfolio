import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import TypingEffect from '../components/TypingEffect.jsx';
import SocialButton from '../components/SocialButton.jsx';
import IMG from '../assets/sung-jin-woo.png';
import IMG2 from '../assets/react-logo.png';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/home') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='home-container' className='home-container'>
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
        <div id='services-container' className='services-container'>
          <h2 id='services' class='exception'>
            Services
          </h2>
          <div>
            <div className='left'>
              <h3>I'm a full stack web developer</h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
            </div>
            <div className='right'>
              <img src={IMG2} alt='test'></img>
            </div>
          </div>
        </div>
        <div id='skills-container' className='skills-container'>
          <h2 id='skills' class='exception'>
            Skills
          </h2>
          <div>
            <div className='left'>
              <img src={IMG2} alt='test'></img>
            </div>
            <div className='right'>
              <h3>I'm a full stack web developer</h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
            </div>
          </div>
        </div>
        <div id='education-container' className='education-container'>
          <h2 id='education' class='exception'>
            Education
          </h2>
          <div>
            <div className='left'>
              <h3>I'm a full stack web developer</h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
            </div>
            <div className='right'>
              <img src={IMG2} alt='test'></img>
            </div>
          </div>
        </div>
        <div id='experience-container' className='experience-container'>
          <h2 id='experience' class='exception'>
          Experience
          </h2>
          <div>
            <div className='left'>
              <img src={IMG2} alt='test'></img>
            </div>
            <div className='right'>
              <h3>I'm a full stack web developer</h3>
              <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
            </div>
          </div>
        </div>
        <div id='contact-container' className='contact-container'>
          <h2 id='contact' class='exception'>
            Contact
          </h2>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
