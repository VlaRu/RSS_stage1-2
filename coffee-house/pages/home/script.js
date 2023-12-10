const burger = document.querySelectorAll('.burger-icon-container');
const burgerListBar = document.querySelector('.navigation-mobile-container');

function toggleBurgerMenu() {
  burgerListBar.style.display = burgerListBar.style.display === 'flex' ? 'none' : 'flex';
}

burger.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('burger_active');
    toggleBurgerMenu();
  });
});

