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

/* Slide img */

const img = Array.from(document.querySelectorAll('.favourite-coffee-image-container'));
const btnNext = document.querySelector('.arrow-left');
const btnPrev = document.querySelector('.arrow-right');
const buttons = document.querySelectorAll('.favourite-button-slide');

let slideIndex = 1;
let intervalId;
let touchStartX = 0;
let touchEndX = 0;

showSlides(slideIndex);
startAutoSlide();
toggleClassOnTimer();

function showSlides(n) {
    if (n > img.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = img.length;
    }

    img.forEach(item => {
        item.style.display = 'none';
    });

    img[slideIndex - 1].style.display = 'flex';
}

function addSlides(n) {
    stopAutoSlide();
    showSlides((slideIndex += n));
}

function startAutoSlide() {
    const intervalDuration = 5000;
    intervalId = setInterval(() => {
        addSlides(1);
    }, intervalDuration);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > swipeThreshold) {
        addSlides(-1);
    } else if (swipeDistance < -swipeThreshold) {
        addSlides(1);
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

btnNext.addEventListener('click', () => {
    addSlides(1);
});

btnPrev.addEventListener('click', () => {
    addSlides(-1);
});

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addSlides(index + 1);
    });
});

function toggleActiveClass(index) {
    buttons[index].classList.add('active-favourite-button');
    setTimeout(() => {
        buttons[index].classList.remove('active-favourite-button');
    }, 5000); // 5 seconds timeout
}

function toggleClassOnTimer() {
    let currentIndex = 0;

    function toggleClass() {
        toggleActiveClass(currentIndex);
        currentIndex = (currentIndex + 1) % buttons.length;
        setTimeout(toggleClass, 5000);
    }

    toggleClass();
}


