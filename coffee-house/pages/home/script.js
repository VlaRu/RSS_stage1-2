

function showAlert() {
  alert('Я бы хотела ещё что-нибудь добавить в функционал если у вас есть такая возможность отложить проверку до следующего дня буду благодарна!!!');
}
window.onload = showAlert;
/* burger navigation */
const burger = Array.from(document.querySelectorAll('.burger-icon-container'));
const burgerListBar = document.querySelector('.navigation-mobile-container');

function toggleBurgerMenu() {
  burgerListBar.style.right = burgerListBar.style.right === '0%' ? '-100%' : '0%';
}


burger.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    toggleBurgerMenu();
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

