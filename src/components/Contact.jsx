import './Contact.css';
import SocialButton from './SocialButton.jsx';
import DownloadCVButton from './DownloadCVButton.jsx';
import { ReactComponent as MailIcon } from '../assets/mail-icon.svg';
import { ReactComponent as PhoneIcon } from '../assets/phone-icon.svg';

function Contact() {
  return (
    <div id='contact-container' className='contact-container section-container'>
      <h2 id='contact' class='section-header'>
        Contact Me
      </h2>
      <div>
        <div className='left'>
          <h3>Contact Information</h3>
          <div className='contact-methods-container'>
            <div className='contact-method-container'>
              <MailIcon className='contact-method-icon' />
              <span className='contact-method-text'>reaperianbusiness@gmail.com</span>
            </div>
            <div className='contact-method-container'>
              <PhoneIcon className='contact-method-icon' />
              <span className='contact-method-text'>0123456789</span>
            </div>
          </div>
          <div className='social-buttons'>
            <SocialButton platform='linkedin' />
            <SocialButton platform='indeed' />
            <SocialButton platform='github' />
            <SocialButton platform='twitter' />
            <SocialButton platform='instagram' />
          </div>
          <DownloadCVButton />
        </div>
        <div className='right'>
          <input className='input' type='text' placeholder='Your name' />
          <input className='input' type='text' placeholder='Your Email' />
          <input className='input' type='text' placeholder='Subject' />
          <input className={'message input'} type='text' placeholder='Your Message' />
          <button className='submit-button'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
