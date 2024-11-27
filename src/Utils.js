export function moveTo(sectionName) {
  let section = document.getElementById(sectionName);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export function moveToContact() {
  let section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export function moveToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function openEmail(email, subject) {
  let url = `mailto:${email}?subject=${subject}`;
  if (url) {
    window.open(url, '_blank');
  }
};

export function openNewTab(url) {
  if (url) {
    window.open(url, '_blank');
  }
};