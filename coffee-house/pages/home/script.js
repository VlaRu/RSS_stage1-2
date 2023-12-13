/* burger navigation */

const burgers = Array.from(document.querySelectorAll('.burger-icon-container'));
const burgerMenus = Array.from(document.querySelectorAll('.navigation-mobile-container'));

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
const img = Array.from(document.querySelectorAll('.favourite-coffee-image-container'))
const btnNext = document.querySelector('.arrow-left');
const btnPrev = document.querySelector('.arrow-right');
let slideIndx = 1;
let intervalId;
let touchStartX = 0;
let touchEndX = 0;

showSlides(slideIndx)
startAutoSlide();

function showSlides(n) {
    if(n > img.length){
        slideIndx = 1;
    }

    if(n < 1){
        slideIndx = img.length;
    }

    img.forEach(item => {
        item.style.display = "none"
    });

    img[slideIndx -1].style.display = "block"
}

function addSlides(n) {
    showSlides(slideIndx += n)
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
      stopAutoSlide();
  } else if (swipeDistance < -swipeThreshold) {
      addSlides(1);
      stopAutoSlide();
  }
}

btnNext.addEventListener('click', ()=>{
    addSlides(1);
    stopAutoSlide();
})
btnPrev.addEventListener('click', ()=>{
    addSlides(-1);
    stopAutoSlide();
})

