import React from 'react';
import { ReactComponent as IndeedIcon } from '../assets/indeed-icon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram-icon.svg';
import './SocialButton.css';

function SocialButton({ platform, color = '#000000' }) {
  let iconMap = {
    indeed: <IndeedIcon />,
    linkedin: <LinkedinIcon />,
    github: <GithubIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
  };

  let icon = iconMap[platform];
  if (!icon) return null;

  return (
    <button className='social-button' type='button'>
      {icon}
    </button>
  );
}

export default SocialButton;