import './HireButton.css';

function HireButton() {
  let email = 'reaperianbusiness@gmail.com';
  let subject = "Let's work together!";
  let openEmail = () => {
    let url = `mailto:${email}?subject=${subject}`;
    if (url) {
      window.open(url, '_blank');
    }
  };

  let moveToContact = () => {
    let section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className='hire-button' onClick={moveToContact}>
      Hire me
    </button>
  );
}

export default HireButton;
