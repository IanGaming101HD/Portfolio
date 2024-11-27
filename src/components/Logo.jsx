import './Logo.css';

function Logo() {
  let moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <h1 onClick={moveToTop}>IanGaming101HD</h1>
  );
}

export default Logo;
