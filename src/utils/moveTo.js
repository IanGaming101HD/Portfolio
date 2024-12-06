function moveTo(sectionName) {
  let section = document.getElementById(sectionName);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export default moveTo;
