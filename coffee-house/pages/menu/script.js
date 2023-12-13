/* burger navigation */

const burgers = Array.from(document.querySelectorAll('.burger-icon-container'));
const burgerMenus = Array.from(document.querySelectorAll('.navigation-mobile-container'));
const linkElements = Array.from(document.querySelectorAll('.link-element'));

linkElements.forEach((item, index) => {
  item.addEventListener('click', () => {
    burgers.forEach((otherBurger, otherIndex) => {
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

burgers.forEach((item, index) => {
  item.addEventListener('click', () => {
    burgers.forEach((otherBurger, otherIndex) => {
      if (otherIndex !== index) {
        otherBurger.classList.remove('active');
        toggleBurgerMenu(otherIndex);
      }
    });

    item.classList.toggle('active');
    toggleBurgerMenu(index);
  });
});

/* menu */
const contentWraps = document.querySelectorAll('.content-wrap');
const buttons = document.querySelectorAll('.button-navigation');

function showContent(contentId) {

  contentWraps.forEach(contentWrap => {
      contentWrap.style.display = 'none';
  });

  buttons.forEach(button => {
      button.classList.remove('active-button-nav');
  });

  const selectedContentWrap = document.getElementById(contentId);
  selectedContentWrap.style.display = 'flex';
  console.log(selectedContentWrap)

  const selectedButton = document.querySelector(`[onclick="showContent('${contentId}')"]`);
  selectedButton.classList.add('active-button-nav');
}