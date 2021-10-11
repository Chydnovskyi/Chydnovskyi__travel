const headerBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
const headerLogo = document.querySelector('.header__img');

headerNav.classList.remove('header__nav--no-js');

headerBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  headerNav.classList.toggle('header__nav--no-js');
  headerBtn.classList.toggle('header__btn--close');
});

// let popupForm = document.querySelector(".popup");
// let btnNow = document.querySelectorAll(".button--now");
// let popupClose = document.querySelector(".popup__link");

// btnNow.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupForm.classList.remove("popup--no-js");
// });

// popupClose.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupForm.classList.add("popup--no-js");
// });

// window.addEventListener("click", function(evt) {
//   if(evt.target === popupForm) {
//     popupForm.classList.add("popup--no-js");
//   }
// });

// 'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

// const tabGlobal = document.querySelector(".tab__item-country");
// const tabLinkOne = document.querySelector(".tab__link1");
// const tabLink2 = document.querySelector(".tab__link2");
// const tabLink3 = document.querySelector(".tab__link3");
// const tabLink4 = document.querySelector(".tab__link4");
// const tabLink5 = document.querySelector(".tab__link5");

// tabLinkOne.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     tabGlobal.classList.toggle("tab__item-country--disabled")
// });
