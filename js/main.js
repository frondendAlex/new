// Menu burger
const headerBurgerMenu = document.querySelectorAll('.header__burger-menu');
const headerMenu = document.querySelector('.header__menu');
const menuFixed = document.querySelector('.menu-fixed');

headerBurgerMenu.forEach(element => {

  element.addEventListener('click', function() {

    menuShow();

    if (element.classList.contains('header__burger-menu-active')) {
      element.classList.remove('header__burger-menu-active');
    } else {
      element.classList.add('header__burger-menu-active');
    }
  });

});

function menuShow() {
  headerMenu.classList.toggle('header__menu-active');
  menuFixed.classList.toggle('header__menu-active');
};

// Scoll menu fixed
const headerTop = document.querySelector('.header');
const headerTopFixed = document.querySelector('.menu');

window.addEventListener('scroll', function() {
  
  if (window.pageYOffset > 400) {
    headerTop.style.display = 'none';
    headerTopFixed.style.display = 'block';
  } else if (window.pageYOffset < 150) {
    headerTop.style.display = 'block';
    headerTopFixed.style.display = 'none';
  }
  
});

// Slider
$(document).ready(function() {

  $('.intro').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

})

// Spoiler
const questionsSpoilerTitle = document.querySelectorAll('.questions__spoiler-title');

questionsSpoilerTitle.forEach(function(e) {
  e.addEventListener('click', btnTitle);
});

function btnTitle() {

  if (this.nextElementSibling.classList.contains('questions__spoiler-list-active')) {
    this.nextElementSibling.classList.remove('questions__spoiler-list-active');
    this.classList.remove('questions__spoiler-title-active');
  } else {
    this.nextElementSibling.classList.add('questions__spoiler-list-active');
    this.classList.add('questions__spoiler-title-active');
  }
  
}

// Order show
const order = document.querySelector('.order');
const orderBtn = document.querySelector('#btn');

function blockShow() {

  let contentShow = `
  <div class="order__item">
    <a href="img/order/order1.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order1.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order2.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order2.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order3.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order3.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order4.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order4.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order5.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order5.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order6.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order6.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order7.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order7.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  <div class="order__item">
    <a href="img/order/order8.jpg" data-fancybox="gallery" data-caption="Экслюзивная мебель">
      <img class="order__img" src="img/order/order8.jpg" alt="Картинка">
    </a>
    <div class="order__text">
      Новый
    </div>
  </div>
  `

  if (contentShow >= 2) {
    orderBtn.style.display = 'block';
  } else {
    orderBtn.style.display = 'none';
  }

  order.insertAdjacentHTML("beforeend", contentShow);
  
}

orderBtn.addEventListener('click', function(e) {
  e.preventDefault();
  blockShow();
});

// Modal
const modal = document.querySelector('.modal');
const modal1 = document.querySelector('.modal-1');
const ShowModal = document.querySelectorAll('.js-modal');
const jsModalConsultation = document.querySelectorAll('.js-modal-consultation');
const closeModal = document.querySelectorAll('.modal__close');

ShowModal.forEach(element => {
  
  element.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('modal__active');
  })

});

jsModalConsultation.forEach(element => {
  
  element.addEventListener('click', function(e) {
    e.preventDefault();
    modal1.classList.add('modal__active');
  })

});

closeModal.forEach(element => {
  
  element.addEventListener('click', function() {
    modal.classList.remove('modal__active');
    modal1.classList.remove('modal__active');
  })

});