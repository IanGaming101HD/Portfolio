import './Logo.css';
import { useNavigate } from 'react-router-dom';
import moveToTop from '../../utils/moveToTop.js';

function Logo() {
  let navigate = useNavigate();
  let handleClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    moveToTop();
  };

  return (
    <h1 onClick={handleClick}>IanGaming101HD</h1>
  );
}

export default Logo;
