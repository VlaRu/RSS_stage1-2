//import {startAutoSlide, stopAutoSlide, showSlides, removeClass, intervalId} from "././modules/slideHomePage.js";

const imageContainer = Array.from(document.querySelectorAll('.favorite-coffee-image-container'));
const btnNext = document.querySelector('.arrow-left');
const btnPrev = document.querySelector('.arrow-right');
const blockSlide = document.querySelectorAll('.favorite-button-slide');

let slideIndex = 0;
let intervalId;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', ()=> {
    startAutoSlide();
    blockSlide[slideIndex].classList.add("active_favorite-button-slide")
})


function showSlides(index) {
    if (index > imageContainer.length - 1) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = imageContainer.length - 1;
    }

    imageContainer.forEach(img => {
        img.style.display = 'none';
    });

    imageContainer[slideIndex].style.display = 'flex';
}

btnNext.addEventListener('click', () => {
    stopAutoSlide();
    showSlides((slideIndex -= 1));
    removeClass();
    blockSlide[slideIndex].classList.add("active_favorite-button-slide");
    startAutoSlide();
});

btnPrev.addEventListener('click', () => {
    stopAutoSlide();
    showSlides((slideIndex += 1));
    removeClass();
    blockSlide[slideIndex].classList.add("active_favorite-button-slide");
    startAutoSlide();
});

// auto slide actions

function startAutoSlide() {
    intervalId = setInterval(() => {
        removeClass();
        blockSlide[slideIndex].classList.add("animate_favorite-button-slide")
        slideIndex = (slideIndex + 1) % blockSlide.length;
        showSlides((slideIndex));
    }, 3000);
    setTimeout(() => {
        blockSlide[slideIndex].classList.remove('animate_favorite-button-slide');
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

function removeClass() {
    blockSlide.forEach(el => {
        el.classList.remove("active_favorite-button-slide", "animate_favorite-button-slide");
    });
}

//slide for mobile device

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > swipeThreshold) {
        showSlides((slideIndex -= 1))
    } else if (swipeDistance < -swipeThreshold) {
        showSlides((slideIndex += 1));
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});