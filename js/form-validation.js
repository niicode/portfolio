document.getElementById('contact').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email.value !== email.toLowerCase()) {
    event.preventDefault();
    document.querySelector('.error').innerHTML = 'Your email address should be in lowercase';
    event.target.reset();
  }
});
