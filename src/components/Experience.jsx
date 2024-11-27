import React from 'react';
import './Experience.css';
import image from '../assets/react-logo.png';

function Experience() {
  let experienceObject = { 
    education: [{ image, duration: 'Jan 2024 - Present', title: 'Qualification Title 1', company_title: 'Company Name', short_desc: 'Short description' }, { image, duration: 'Jan 2024 - Present', title: 'Qualification Title 2', company_title: 'Company Name', short_desc: 'Short description' }],
    work: [{ image, duration: 'Jan 2024 - Present', title: 'Qualification Title 3', company_title: 'Company Name', short_desc: 'Short description' }, { image, duration: 'Jan 2024 - Present', title: 'Qualification Title 4', company_title: 'Company Name', short_desc: 'Short description' }]
  };

  let createExperienceItems = (experienceType) => {
    let selectedExperience = experienceObject[experienceType];
    let contentContainer = document.querySelector('.experience-content');
    selectedExperience.forEach(item => {
      let experienceItem = document.createElement('div');
      experienceItem.classList.add('experience-item');

      let imageElement = document.createElement('img');
      imageElement.classList.add('experience-image');
      imageElement.src = item.image;

      let detailsContainer = document.createElement('div');
      detailsContainer.classList.add('experience-details');

      let dateElement = document.createElement('span');
      dateElement.classList.add('experience-date');
      dateElement.textContent = item.duration;

      let titleElement = document.createElement('span');
      titleElement.classList.add('experience-title');
      titleElement.textContent = item.title;

      let companyElement = document.createElement('span');
      companyElement.classList.add('experience-company');
      companyElement.textContent = item.company_title;

      let descriptionElement = document.createElement('span');
      descriptionElement.classList.add('experience-description');
      descriptionElement.textContent = item.short_desc;

      detailsContainer.appendChild(dateElement);
      detailsContainer.appendChild(titleElement);
      detailsContainer.appendChild(companyElement);
      detailsContainer.appendChild(descriptionElement);
      experienceItem.appendChild(imageElement);
      experienceItem.appendChild(detailsContainer);
      contentContainer.appendChild(experienceItem);
    });
  };

  let click = (event) => {
    let element = event.target;
    let activeTabs = Array.from(document.getElementsByClassName('active-tab'));
    if (activeTabs.includes(element)) return;

    activeTabs.forEach((activeTab) => activeTab.classList.remove('active-tab'));
    element.classList.add('active-tab');

    let experienceContents = Array.from(document.getElementsByClassName('experience-item'));
    experienceContents.forEach((experienceContent) => experienceContent.remove());

    createExperienceItems(element.name);
  };

  React.useEffect(() => {
    createExperienceItems('education');
  }, []);

  return (
    <div className='experience-section section-container'>
      <h2 id='experience' className='section-header'>
        Experience
      </h2>
      <div className='experience-tabs-wrapper'>
        <div className='experience-tabs'>
          <button className='tab-button active-tab' name="education" onClick={click}>
            Education
          </button>
          <button className='tab-button' name="work" onClick={click}>
            Work
          </button>
        </div>
        <div className='experience-content'>
        </div>
      </div>
    </div>
  );
}

export default Experience;
