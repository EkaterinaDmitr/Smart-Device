import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initFooter();
  });
});


const clickToHide2 = document.querySelector('#click-to-hide-2');
clickToHide2.addEventListener('click', hideVisibleElem);

function hideVisibleElem() {
  let wpcraftBox2 = document.querySelector('.wpcraft-box-2');
  wpcraftBox2.classList.toggle('about-company__continuation');

  if (wpcraftBox2.classList.contains('about-company__continuation')) {
    clickToHide2.value = 'Подробнее';
  } else {
    clickToHide2.value = 'Свернуть';
  }
}

const siteSectionsElement = document.querySelector('.page-footer__site-sections');
const contactsElement = document.querySelector('.page-footer__contacts');

const siteSectionTitleElement = siteSectionsElement.querySelector('.site-sections__title');
const contactsTitleElement = contactsElement.querySelector('.communications__title');

const siteSectionsListElement = siteSectionsElement.querySelector('.site-sections__list');
const contactsListElement = contactsElement.querySelector('.communications__list');

function onSiteSectionsTitleClick() {
  if (siteSectionsListElement.style.display === '') {
    siteSectionsListElement.style.display = 'flex';
    siteSectionsElement.classList.add('is-opened');
    contactsListElement.style.display = '';
    contactsElement.classList.remove('is-opened');
  } else {
    siteSectionsListElement.style.display = '';
    siteSectionsElement.classList.remove('is-opened');
  }
}

function onContactsTitleClick() {
  if (contactsListElement.style.display === '') {
    contactsListElement.style.display = 'flex';
    contactsElement.classList.add('is-opened');
    siteSectionsListElement.style.display = '';
    siteSectionsElement.classList.remove('is-opened');
  } else {
    contactsListElement.style.display = '';
    contactsElement.classList.remove('is-opened');
  }
}

export const initFooter = () => {
  siteSectionsElement.classList.remove('page-footer__site-sections--nojs');
  contactsElement.classList.remove('page-footer__contacts--nojs');

  siteSectionTitleElement.addEventListener('click', onSiteSectionsTitleClick);
  contactsTitleElement.addEventListener('click', onContactsTitleClick);
};
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
