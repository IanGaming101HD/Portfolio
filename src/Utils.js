export let moveTo = (sectionName) => {
  let section = document.getElementById(sectionName);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export let moveToContact = () => {
  let section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
