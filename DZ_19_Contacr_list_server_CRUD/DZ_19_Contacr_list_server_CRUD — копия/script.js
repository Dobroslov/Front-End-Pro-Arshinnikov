'use strict';

// url: https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/

// Реализовать список контактов

// Список пользователей в виде таблицы, таблица состоит из 4-х колонок:

// имя, email, телефон, действия

// Под таблицей форма добавления с теми же тремя полями.

// В колонке действия две кнопки редактировать и удалить.

// При клике по кнопке Редактировать в таблице, форма заполняется данными из этой строки.

// При самбите формы, происходит сохранение данных добавление/редактирование, в зависимости от того был ли клик по строке.

// При клике по удалить - удаляется с сервера.

// Редактирование - это дополнительное задание

const CONTACT_LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const ADD_CONTACT_BTN = document.getElementById('add-contact-btn');
const DELETE_CONTACT_BTN = document.getElementById(
  'button-delete-contact-$index$'
);
let contactsList = [];

const listContacts = document.getElementById('list-contacts');
const inputContactName = document.getElementById('input-contact-name');
const inputContactSurname = document.getElementById('input-contact-surname');
const inputContactTel = document.getElementById('input-contact-tel');
const contactTemplate = document.getElementById(
  'contact-template-html'
).innerHTML; // фрагмент из html заключённый в скрипт теге
const contactName = document.getElementById('contact-name');
const contactSurname = document.getElementById('contact-surname');
const contactTel = document.getElementById('contact-tel');

ADD_CONTACT_BTN.addEventListener('click', onAddNewUserBtnClick); // получаю элемент кнопку, назначаю ей событие по клику и запускаю функцию

init();

function init() {
  fetchContactsList();
}
function fetchContactsList() {
  fetch(CONTACT_LIST_URL)
    .then((resp) => resp.json())
    .then(setContactsList)
    .then(renderList);
}

function setContactsList(data) {
  return (contactsList = data);
}

function renderList(list) {
  console.log(list);
  listContacts.innerHTML = list.map(getItemHtml).join('');
}

function getItemHtml({ id, name, phone, email }) { 
  return contactTemplate
    .replace('{{name}}', name)
    .replace('{{phone}}', phone)
    .replace('{{email}}', email)
    .replace('{{id}}', id);
}

function onAddNewContactBtnClick() {
  if (
    isInputValue(
      inputNewUserName.value,
      inputNewUserSurname.value,
      inputNewUserTelefon.value
    )
  ) {
    // console.log('add', inputNewUserName.value, inputNewUserSurname.value, inputNewUserTelefon.value);
    addNewUser(
      inputNewUserName.value,
      inputNewUserSurname.value,
      inputNewUserTelefon.value
    );

    resetForms();
  }
  // console.log('clicked', inputNewUserName.value);
}

// function isInputValue(name, surname, tel) {
//   // валидация вводимых данных
//   return name.trim() !== '' && surname.trim() !== '' && tel.trim() !== ''; // trim обрезает пробелы по бокам строки
// }

// function addNewUser(name, surname, tel) {
//   // добавление нового пользователя с его данными
//   // console.log('add', name, surname, tel);
//   let currentIndex = document.getElementsByClassName('user-information').length; // получаю колличество элементов в таблице с контактами и присваиваю это значение переменной
//   const newUserTemplate = getNewUserTemplate(name, surname, tel, currentIndex); // здесь готовый и заполненный шаблон данными нового пользователя
//   // console.log('add template', newUserTemplate);
//   listContacts.insertAdjacentHTML('beforeend', newUserTemplate); // вставляю HTML код на страницу "на лету"

//   addEventForDeleteBtn(currentIndex); // внутри функции в которой создаётся пользователь я создаю функцию удаление пользователя и в аргумент добавляю порядковый номер пользователя
// }

// function resetForms() {
//   // сбрасываем форму для заполнения на пустую
//   inputNewUserName.value = '';
//   inputNewUserSurname.value = '';
//   inputNewUserTelefon.value = '';
// }

// function getNewUserTemplate(name, surname, tel, index) {
//   // добавление значение инпутов в HTML шаблон

//   return newUserTemplate
//     .replace('$name$', name)
//     .replace('$surname$', surname)
//     .replace('$tel$', tel)
//     .replace('$index$', index); // здесь добавляется порядковый номер в id для кнопки delete оно берётся из "let currentIndex ="
//   // добавление значения в форме, которое ввёл пользователь через инпут
// }

// function addEventForDeleteBtn(index) {
//   // в аргументе передан порядковый номер пользователя
//   let deleteButton = document.getElementById('button-delete-user-' + index); // получаю
//   deleteButton.addEventListener('click', onDeleteUserBtnClick); // создаю событие клика по кнопке удалить и запускаю функцию удаления
//   console.log(deleteButton);
//   // получаю элемент кнопку удаления пользователя назначаю ей событие по клику и запускаю функцию
// }

// function onDeleteUserBtnClick(event) {
//   // фунция удаления элемента, в скобках объект события
//   let target = event.target; // получаем ссылку на ДОМ элемент на котором произошло событие
//   let targetRow = target.closest('.user-information'); // метод closest возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору (.user-information)
//   targetRow.remove(); // удаляет элемент из DOM дерева
//   // console.log('clicked', targetRow);
// }
