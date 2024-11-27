import './Logo.css';
import { moveToTop } from '../Utils.js';

function Logo() {
  return (
    <h1 onClick={moveToTop}>IanGaming101HD</h1>
  );
}

export default Logo;
