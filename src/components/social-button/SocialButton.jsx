import React from 'react';
import { ReactComponent as IndeedIcon } from '../../assets/indeed-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg';
import './SocialButton.css';
import openNewTab from '../../utils/openNewTab.js';

function SocialButton({ platform }) {
  let socialMap = {
    indeed: {
      icon: <IndeedIcon />,
      url: 'https://www.indeed.com/iangaming101hd'
    },
    linkedin: {
      icon: <LinkedinIcon />,
      url: 'https://www.linkedin.com/iangaming101hd'
    },
    github: {
      icon: <GithubIcon />,
      url: 'https://www.github.com/iangaming101hd'
    },
    twitter: {
      icon: <TwitterIcon />,
      url: 'https://www.twitter.com/iangaming101hd'
    },
    instagram: {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/iangaming101hd'
    },
  };

  let url = socialMap[platform].url;
  let icon = socialMap[platform].icon;
  if (!icon) return;

  return (
    <button className='social-button' type='button' onClick={() => openNewTab(url) }>
      {icon}
    </button>
  );
}

export default SocialButton;
