
  // Слайдер для блоку guiters
  const guitersContainer = document.querySelector('.guiters');
  const nextGuitersBtn = document.querySelector('.nexti');
  const prevGuitersBtn = document.querySelector('.previ');
  let guitersIndex = 0;
  let guitersSlides = document.querySelectorAll('.guiters .card');

  function updateGuitersWidth() {
    return guitersSlides[0].clientWidth;
  }

  function moveGuitersToNext() {
    const guitersSlideWidth = updateGuitersWidth();
    if (guitersIndex < guitersSlides.length - 1) {
      guitersIndex++;
    } else {
      guitersIndex = 0;
    }
    guitersContainer.style.transform = `translateX(-${guitersIndex * guitersSlideWidth}px)`;
  }

  function moveGuitersToPrev() {
    const guitersSlideWidth = updateGuitersWidth();
    if (guitersIndex > 0) {
      guitersIndex--;
    } else {
      guitersIndex = guitersSlides.length - 1;
    }
    guitersContainer.style.transform = `translateX(-${guitersIndex * guitersSlideWidth}px)`;
  }

  nextGuitersBtn.addEventListener('click', moveGuitersToNext);
  prevGuitersBtn.addEventListener('click', moveGuitersToPrev);

  // Динамічне оновлення розмірів на зміну розміру екрану
  window.addEventListener('resize', function () {
    guitersContainer.style.transform = `translateX(-${guitersIndex * updateGuitersWidth()}px)`;
  });

  // Слайдер для блоку slides (партнери)
  const slidesContainer = document.querySelector('.slides');
  const nextSlidesBtn = document.querySelector('.next');
  const prevSlidesBtn = document.querySelector('.prev');
  let slidesIndex = 0;
  let slideElements = document.querySelectorAll('.slides .slide');

  function updateSlideWidth() {
    // Оновлення ширини слайду партнерів
    return slideElements[0].clientWidth;
  }

  function moveSlidesToNext() {
    const slideWidth = updateSlideWidth();
    if (slidesIndex < slideElements.length - 1) {
      slidesIndex++;
    } else {
      slidesIndex = 0;
    }
    slidesContainer.style.transform = `translateX(-${slidesIndex * slideWidth}px)`;
  }

  function moveSlidesToPrev() {
    const slideWidth = updateSlideWidth();
    if (slidesIndex > 0) {
      slidesIndex--;
    } else {
      slidesIndex = slideElements.length - 1;
    }
    slidesContainer.style.transform = `translateX(-${slidesIndex * slideWidth}px)`;
  }

  nextSlidesBtn.addEventListener('click', moveSlidesToNext);
  prevSlidesBtn.addEventListener('click', moveSlidesToPrev);

  // Динамічне оновлення ширини слайдів на зміну розміру екрану
  window.addEventListener('resize', function () {
    slidesContainer.style.transform = `translateX(-${slidesIndex * updateSlideWidth()}px)`;
  });


let currentIndex = 0;
const slides = document.querySelectorAll('.slidek');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const sliderWidth = document.querySelector('.bigslider').clientWidth;
    document.querySelector('.bigsliders').style.transform = `translateX(${-index * sliderWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(index);
}

setInterval(nextSlide, 3000);  // Автоматична зміна слайдів кожні 3 секунди


  const hamburgerButton = document.querySelector('.hamburger-button');
  const navLinks = document.querySelector('.nav-links');

  hamburgerButton.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
