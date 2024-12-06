function moveToContact() {
  let section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export default moveToContact;
