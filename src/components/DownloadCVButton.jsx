import './DownloadCVButton.css';
import cv from '../assets/Ian Grey - CV.pdf'

function DownloadCV() {
    let click = () => {
        let link = document.createElement('a');
        link.href = cv;
        link.download = 'Ian Grey - CV';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <button className='download-cv-button' onClick={click}>Download CV</button>
  );
}

export default DownloadCV;
