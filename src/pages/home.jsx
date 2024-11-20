import './home.css';
import Header from '../components/Header.jsx';
import SocialButton from '../components/SocialButton.jsx';

function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <img src='../assets/img.png' alt='test'></img>
        <h2>Hi, Im Ian</h2>
        <h3>I'm a full stack web developer</h3>
        <p>Having created many projects, I am very passionate about Computer Science and have shown my interest by learning many programming languages such as Python, Lua, and JavaScript. Projects include creating a web application, games and working with databases. I plan to study Computer Science and would like to have work experience in a technological industry. Apart from programming, I have many other skills which is working with spreadsheets, presentations and video/audio editing.</p>
        <div>
          <SocialButton />
          <SocialButton />
          <SocialButton />
          <SocialButton />
        </div>
      </div>
      <footer>
        <p>Copyrights 2024</p>
      </footer>
    </>
  );
}

export default Home;
