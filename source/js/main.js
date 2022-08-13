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
  });
});


// Вешаем обработчик клика на кнопку
const clickToHide2 = document.querySelector('#click-to-hide-2');
clickToHide2.addEventListener('click', hideVisibleElem);

// Функция добавления / удаления класса, который скрывает элемент
function hideVisibleElem() {
  let wpcraftBox2 = document.querySelector('.wpcraft-box-2');
  wpcraftBox2.classList.toggle('about-company__continuation');

// В зависимости от наличия скрывающего класса меняем текст в кнопке
  if (wpcraftBox2.classList.contains('about-company__continuation')) {
    clickToHide2.value = 'Подробнее';
  } else {
    clickToHide2.value = 'Свернуть';
  }
}



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
