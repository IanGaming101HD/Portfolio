function openEmail(email, subject) {
  let url = `mailto:${email}?subject=${subject}`;
  if (url) {
    window.open(url, '_blank');
  }
}

export default openEmail;
