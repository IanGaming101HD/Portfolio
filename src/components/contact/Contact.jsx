import './Contact.css';
import SocialButton from '../social-button/SocialButton.jsx';
import DownloadCVButton from '../download-cv-button/DownloadCVButton.jsx';
import { ReactComponent as MailIcon } from '../../assets/mail-icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';

function Contact() {
  // let sendForm = async () => {
  let sendForm = () => {
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let subject = document.getElementById('subject-input').value;
    let message = document.getElementById('message-input').value;

    // let response;
    
    // try {
    //   response = await fetch('http://localhost:3000/send-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, subject, message }),
    //   })
    // } catch (error) {
    //   console.error('Error:', error)
    // }

    // if (response.ok) {
    //   alert('Email sent successfully!');
    // } else {
    //   alert('Failed to send email.');
    // }

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email.');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

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
        <div className={'right'}>
          <form className='form-container'>
            <div className='input-group'>
              <input id='name-input' className='form-input' type='text' placeholder='Your Name' />
              <input id='email-input' className='form-input' type='email' placeholder='Your Email' />
            </div>
            <input id='subject-input' className='form-input' type='text' placeholder='Subject' />
            <textarea id='message-input' className='form-input form-textarea' placeholder='Your Message'></textarea>
            <button id='submit-button' className='submit-button' onClick={sendForm}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
