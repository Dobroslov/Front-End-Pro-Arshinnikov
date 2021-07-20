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

const listContacts = document.getElementById('list-contacts');
const inputContactName = document.getElementById('input-contact-name');
const inputContactPhone = document.getElementById('input-contact-phone');
const inputContactEmail = document.getElementById('input-contact-email');
const contactTemplate = document.getElementById(
  'contact-template-html'
).innerHTML; // фрагмент из html заключённый в скрипт теге
const contactName = document.getElementById('contact-name');
const contactPhone = document.getElementById('contact-phone');
const contactEmail = document.getElementById('contact-email');

ADD_CONTACT_BTN.addEventListener('click', onAddNewContactBtnClick); // получаю элемент кнопку, назначаю ей событие по клику и запускаю функцию
listContacts.addEventListener('click', onDeleteContactBtnClick);

let contactsList = [];
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
  const newContact = getFormData();
  if (
    isInputValue(
      inputContactName.value,
      inputContactPhone.value,
      inputContactEmail.value
    )
  ) {
    createNewContact(newContact);

    resetForms();
  }
  // console.log('clicked', inputNewUserName.value);
}

function getFormData() {
  return {
    name: inputContactName.value,
    phone: inputContactPhone.value,
    email: inputContactEmail.value,
  };
}

function resetForms() {
  // сбрасываем форму для заполнения на пустую
  inputContactName.value = '';
  inputContactPhone.value = '';
  inputContactEmail.value = '';
}

function isInputValue(name, tel, email) {
  // валидация вводимых данных
  return name.trim() !== '' && tel.trim() !== '' && email.trim() !== ''; // trim обрезает пробелы по бокам строки
}

function createNewContact(newContact) {
  fetch(CONTACT_LIST_URL, {
    method: 'POST',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then(addContact);
}

function addContact(contact) {
  contactsList.push(contact);
  renderList(contactsList);
}

function onDeleteContactBtnClick(event) {
  const contactId = getContactId(event.target);
  console.log(contactId);
  if (event.target.classList.contains('button-delete-contact')) {
    deleteContact(contactId);
  }
}

function getContactId(element) {
  // console.log(element.closest('.contact-item').dataset.contactId);
  return element.closest('.contact-item').dataset.contactId;
}

function deleteContact(contactId) {
  fetch(CONTACT_LIST_URL + contactId, {
    method: 'DELETE',
  }).then(() => {
    contactsList = contactsList.filter((item) => item.id !== contactId);
    renderList(contactsList);
  });
}