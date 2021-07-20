'use strict';

// 1) Список:
//   а) Получить список с сервера
//   б) Рендер списка
// 2)Создание записи:
//   а) Получить данные формы
//   б) Валидация данных
//   в) Отправить на сервер
// 3) Toggle
//   а) О ком речь
//   б) поменять признак
//   в) отправить на сервер
//   г) отрендерить
// 4)Удалине:
//   а) о ком речь
//   б) отправить
//   в) удалить
// Прикидываем какие есть похожие вещи

const NEW_CONTACT_TEMPLATE = ``;
const CONTACTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

const template = document.getElementById('newContactTemlate').innerHTML;
const contactEl = document.getElementById('contactList');
const nameEl = document.getElementById('newInputName');
const phoneEl = document.getElementById('newInputPhone');
const emailEl = document.getElementById('newInputEmail');
const addContactForm = document.getElementById('addContactBtn');

addContactForm.addEventListener('click', onAddContactFormSubmit);
contactEl.addEventListener('click', onDeleteButtonClick);

let contactsList = [];

init();

function onAddContactFormSubmit(event) {
  event.preventDefault();

  submitForm();
}

function onDeleteButtonClick(event) {
  const contactId = getContactId(event.target);
  if (event.target.classList.contains('deleteBtn')) {
    deleteContact(contactId);
  }
}

function getContactId(el) {
  return el.closest('.newContactRow').dataset.contactId;
}

function init() {
  fetchContacts();
}

function fetchContacts() {
  fetch(CONTACTS_URL)
    .then((resp) => resp.json())
    .then(setContacts)
    .then(renderList);
}

function setContacts(data) {
  return (contacts = data);
}

function renderList(list) {
  contactEl.innerHTML = list.map(getItemHtml).join('');
}

function getItemHtml({ name, phone, email, id }) {
  return template
    .replace('{{name}}', name)
    .replace('{{phone}}', phone)
    .replace('{{email}}', email)
    .replace('{{id}}', id);
}

function submitForm() {
  const newContact = getFormData();

  if (isInputValid(nameEl.value && phoneEl.value && emailEl.value)) {
    createContact(newContact);
    resetForm();
  }
}

function getFormData() {
  return { name: nameEl.value, phone: phoneEl.value, email: emailEl.value };
}

function resetForm() {
  nameEl.value = '';
  phoneEl.value = '';
  emailEl.value = '';
}

function isInputValid(str) {
  return str.trim() !== '';
}

function createContact(newContact) {
  fetch(CONTACTS_URL, {
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
  contacts.push(contact);
  renderList(contacts);
}

function deleteContact(id) {
  fetch(CONTACTS_URL + id, {
    method: 'DELETE',
  }).then(() => {
    contacts = contacts.filter((item) => item.id !== id);
    renderList(contacts);
  });
}

