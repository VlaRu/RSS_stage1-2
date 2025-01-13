const burgerContainer = Array.from(document.querySelectorAll('.burger-icon-container'));
const burgerMenus = Array.from(document.querySelectorAll('.navigation-mobile-container'));
const linkElements = Array.from(document.querySelectorAll('.link-element'));

export function initBurger(){
  linkElements.forEach((item, index) => {
    item.addEventListener('click', () => {
      burgerContainer.forEach((otherBurger, otherIndex) => {
        if (otherIndex !== index) {
          otherBurger.classList.remove('active');
          toggleBurgerMenu(otherIndex);
        }
      });

      item.classList.toggle('active');
      toggleBurgerMenu(index);
    });
  });

  function toggleBurgerMenu(index) {
    burgerMenus[index].style.right = burgerMenus[index].style.right === '0%' ? '-100%' : '0%';
  }

  burgerContainer.forEach((item, index) => {
    item.addEventListener('click', () => {
      burgerContainer.forEach((otherBurger, otherIndex) => {
        if (otherIndex !== index) {
          otherBurger.classList.remove('active');
          toggleBurgerMenu(otherIndex);
        }
      });

      item.classList.toggle('active');
      toggleBurgerMenu(index);
    });
  });
}

