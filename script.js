const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;
let slideInterval;
const slideWidth = document.querySelector('.slide').clientWidth + 40;

// Функція, яка переміщує перший слайд в кінець
function moveToEnd() {
  const firstSlide = slidesContainer.querySelector('.slide');
  slidesContainer.appendChild(firstSlide);
  slidesContainer.style.transition = 'none';
  slidesContainer.style.transform = `translateX(0px)`;
  setTimeout(() => {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 10);
}

// Функція показу наступного слайду
function nextSlide() {
  currentIndex++;
  slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  if (currentIndex >= slidesContainer.children.length - 1) {
    setTimeout(moveToEnd, 500);
    currentIndex = 0;
  }
}

// Функція показу попереднього слайду
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    const lastSlide = slidesContainer.querySelector('.slide:last-child');
    slidesContainer.prepend(lastSlide);
    slidesContainer.style.transition = 'none';
    slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
    setTimeout(() => {
      slidesContainer.style.transition = 'transform 0.5s ease-in-out';
      slidesContainer.style.transform = `translateX(0px)`;
    }, 50);
    currentIndex = 0;
  } else {
    slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }
}

// Функція для автоматичної прокрутки


function stopSlideShow() {
  clearInterval(slideInterval);
}

document.querySelector('.prev').addEventListener('click', () => {
  stopSlideShow();
  prevSlide();
  startSlideShow();
});

document.querySelector('.next').addEventListener('click', () => {
  stopSlideShow();
  nextSlide();
  startSlideShow();
});

window.addEventListener('load', startSlideShow);

window.addEventListener('resize', () => {
  slidesContainer.style.transform = `translateX(0px)`;
  currentIndex = 0;
});