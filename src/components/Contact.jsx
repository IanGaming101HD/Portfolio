import './Contact.css';
import SocialButton from './SocialButton.jsx';
import { ReactComponent as MailIcon } from '../assets/mail-icon.svg';
import { ReactComponent as PhoneIcon } from '../assets/phone-icon.svg';

function Contact() {
  return (
    <div className='container2'>
      <div className='left'>
        <h2>Contact Me</h2>
        <div>
          <MailIcon />
          <span>contact@example.com</span>
        </div>
        <div>
          <PhoneIcon />
          <span>0123456789</span>
        </div>
        <div className='social-buttons'>
          <SocialButton platform='linkedin' />
          <SocialButton platform='indeed' />
          <SocialButton platform='github' />
          <SocialButton platform='twitter' />
          <SocialButton platform='instagram' />
        </div>
        <button className='download-cv-button'>Download CV</button>
      </div>
      <div className='right'>
        <input className='input' type='text' placeholder='Your name' />
        <input className='input' type='text' placeholder='Your Email' />
        <input className='input' type='text' placeholder='Subject' />
        <input className='input input2' type='text' placeholder='Your Message' />
        <button className='submit-button'>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
