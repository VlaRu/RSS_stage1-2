const burger = Array.from(document.querySelectorAll('.burger-icon-container'));
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


/* Slide img */
const img = Array.from(document.querySelectorAll('.favourite-coffee-image-container'))
const btnNext = document.querySelector('.arrow-left');
const btnPrev = document.querySelector('.arrow-right');
let slideIndx = 1;
let intervalId;

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

btnNext.addEventListener('click', ()=>{
    addSlides(1);
    stopAutoSlide();
})
btnPrev.addEventListener('click', ()=>{
    addSlides(-1);
    stopAutoSlide();
})

