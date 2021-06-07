// Реализовать таблицу контактов. Таблица состоит из 4-х колонок (Имя, Фамилия, номер, действия).

// Внизу таблицы находяться инпуты для ввода соответствующих данных и кнопка добавить.

// Также нужно реализовать валидацию, чтобы нельзя было добавить контакт с каким-то пустым полем
const listContacts = document.getElementById('table-contact');
const inputNewUserName = document.getElementById('input-name');
const inputNewUserSurname = document.getElementById('input-surname');
const inputNewUserTelefon = document.getElementById('input-tel');
const newUserTemplate = document.getElementById('template-html').innerHTML;// фрагмент из html заключённый в скрипт теге

const userName = document.getElementById('user-name');
const userSurname = document.getElementById('user-surname');
const userTel = document.getElementById('user-tel');

document.getElementById('button-add-user').addEventListener('click', onAddNewUserBtnClick); // получаю элемент кнопку, назначаю ей событие по клику и запускаю функцию

init();

function onAddNewUserBtnClick () { // начало функции 'on' даёт понять что это обработчик события, дальше указывается элемент на который мы вешаем обработчик события 'NewUserBtn' и потом само событие "click"
  if (isInputValue(inputNewUserName.value, inputNewUserSurname.value, inputNewUserTelefon.value)) {
    // console.log('add', inputNewUserName.value, inputNewUserSurname.value, inputNewUserTelefon.value);    
    addNewUser(inputNewUserName.value, inputNewUserSurname.value, inputNewUserTelefon.value);    
    resetForms();
  }
  // console.log('clicked', inputNewUserName.value);
}

function onDeleteUserBtnClick (event) { // фунция удаления элемента, в скобках
  let target = event.target;
  let targetRow = target.closest('.user-information');
  targetRow.remove();
  // console.log('clicked', targetRow);
}

function isInputValue (str, str1, num) { // валидация вводимых данных
  return str.trim() !== '' && str1.trim() !== '' && num.trim() !== '';
}

function addNewUser(name, surname, tel) { // добавление нового пользователя с его данными
  // console.log('add', name, surname, tel);   
  let currentIndex = document.getElementsByClassName('user-information').length;
  const newUserTemplate = getNewUserTemplate(name, surname, tel, currentIndex);
  // console.log('add template', newUserTemplate);
 
  listContacts.insertAdjacentHTML('beforeend', newUserTemplate); 
  addEventForDeleteBtn(currentIndex);
}

function resetForms () {// сбрасываем форму для заполнения на пустую
  inputNewUserName.value = '';
  inputNewUserSurname.value = '';
  inputNewUserTelefon.value = ''; 
}

function getNewUserTemplate (name, surname, tel, index) { // добавление формы для контакта 

  return newUserTemplate
    .replace('$name$', name)
    .replace('$surname$', surname)
    .replace('$tel$', tel)
    .replace('$index$', index);
    // добавление значения в форме, которое ввёл пользователь через инпут
 }
 
function addEventForDeleteBtn (index) {
  let deleteButton = document.getElementById('button-delete-user-' + index);
  deleteButton.addEventListener('click', onDeleteUserBtnClick);
  console.log(deleteButton);
  // получаю элемент кнопку удаления пользователя назначаю ей событие по клику и запускаю функцию
}

function init () {
  addNewUser('Name 1', 'surname 1', 'tel 1');
  addNewUser('Name 2', 'surname 2', 'tel 2');
  addNewUser('Name 3', 'surname 3', 'tel 3'); // автозаполнение нескольких строк  
}