const burger = document.querySelector('.burger-line-wrapper');
    const burgerMenu = document.querySelector('.navigation-mobile-container');
    const container = document.querySelector(".container");
    const navLinks = document.querySelectorAll('.navigation-list a');

export function initBurger(){
  document.addEventListener('DOMContentLoaded', () => {


    if (burger) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        toggleBurger()
      });
    }
  });
}

function toggleBurger() {
  burgerMenu.style.right = burgerMenu.style.right === '0%' ? '-100%' : '0%';
  if (burgerMenu.style.right === '0%') {
    container.style.overflow = "hidden";
  } else {
    container.style.overflow = "";
  }
}

if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleBurger()
    });
  });
}
