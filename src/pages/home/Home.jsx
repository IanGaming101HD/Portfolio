import './Home.css';
import Header from '../../components/header/Header.jsx';
import TypingEffect from '../../components/typing-effect/TypingEffect.jsx';
import SocialButton from '../../components/social-button/SocialButton.jsx';
import foregroundImage from '../../assets/sung-jin-woo.png';
import HireButton from '../../components/hire-button/HireButton.jsx';
import About from '../../components/about/About.jsx';
import Skills from '../../components/skills/Skills.jsx';
import Services from '../../components/services/Services.jsx';
import Experience from '../../components/experience/Experience.jsx';
import Projects from '../../components/projects/Projects.jsx';
import Contact from '../../components/contact/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';

function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <div id='home-container' className='home-container section-container'>
          <div>
            <div className='left'>
              <img className='background-img' src={foregroundImage} alt='test'></img>
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
              <HireButton />
            </div>
          </div>
        </div>
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
