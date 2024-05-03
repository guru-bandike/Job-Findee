const navbar = document.querySelector('.navbar');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
const navMenu = document.querySelector('.nav-menu');
const authWrapper = document.querySelector('.auth-wrapper');

function toggleNavbar() {
  console.log(navbar, navMenuWrapper, navMenu, authWrapper);

  navbar.classList.toggle('verticalMenu');
  navMenuWrapper.classList.toggle('verticalMenu');
  navMenu.classList.toggle('verticalMenu');
  authWrapper.classList.toggle('verticalMenu');
}
