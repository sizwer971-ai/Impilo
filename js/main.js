const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !isExpanded);
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  }
});

document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-status').textContent = 'Thanks. This is a demo only: your information has not been sent or stored. Connect a form service before using this form with real enquiries.';
});

document.querySelector('#current-year').textContent = new Date().getFullYear();