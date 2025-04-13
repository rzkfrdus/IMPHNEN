const toggleBtn = document.getElementById('modeToggle');
const toggler = document.getElementById('navbarToggleBtn');
const togglerIcon = document.getElementById('toggleIcon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

toggler.addEventListener('click', function () {
  this.classList.toggle('open');
  if (this.classList.contains('open')) {
    toggleIcon.src = './assets/img/x-toggle.svg';
  } else {
    toggleIcon.src = './assets/img/burger-toggle.svg';
  }
});

function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY <= 70) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar);

document.addEventListener('DOMContentLoaded', updateNavbar);

document.querySelectorAll('a[href="#home"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
