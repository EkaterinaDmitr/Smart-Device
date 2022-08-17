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
if (clickToHide2) {
  clickToHide2.addEventListener('click', hideVisibleElem);
}

function hideVisibleElem() {
  let wpcraftBox2 = document.querySelector('.wpcraft-box-2');
  wpcraftBox2.classList.toggle('about-company__continuation');

  if (wpcraftBox2.classList.contains('about-company__continuation')) {
    clickToHide2.innerHTML = 'Подробнее';
  } else {
    clickToHide2.innerHTML = 'Свернуть';
  }
}


const accordions = document.querySelectorAll('.accordion');

function onAccordionClick(e) {
  accordions.forEach((accordion) => {
    accordion.classList.remove('is-opened');
    const ul = accordion.querySelector('ul');
    ul.style.display = '';
  });
  const accordion = e.currentTarget;
  const currentUl = accordion.querySelector('ul');
  accordion.classList.add('is-opened');
  currentUl.style.display = 'flex';
}

const initFooter = () => {
  const siteSectionsElement = document.querySelector('.page-footer__site-sections');
  const contactsElement = document.querySelector('.page-footer__contacts');
  siteSectionsElement.classList.remove('page-footer__site-sections--nojs');
  contactsElement.classList.remove('page-footer__contacts--nojs');

  accordions.forEach((acc) => acc.addEventListener('click', onAccordionClick));
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
