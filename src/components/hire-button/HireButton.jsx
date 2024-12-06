import './HireButton.css';
import openEmail from '../../utils/openEmail.js';

function HireButton() {
  let email = 'reaperianbusiness@gmail.com';
  let subject = 'Let\'s work together!';

  return (
    // <button className='hire-button' onClick={() => moveTo('contact')}>
    <button className='hire-button' onClick={() => openEmail(email, subject)}>
      Hire me
    </button>
  );
}

export default HireButton;