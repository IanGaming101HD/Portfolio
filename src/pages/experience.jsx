import './home.css';
import Navigation from '../components/Navigation.jsx'

function Home() {
  return (
    <>
      <Navigation />
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className='Home-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
    </>
  );
}

export default Home;
