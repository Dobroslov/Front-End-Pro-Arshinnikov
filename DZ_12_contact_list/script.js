// Реализовать таблицу контактов. Таблица состоит из 4-х колонок (Имя, Фамилия, номер, действия).

// Внизу таблицы находяться инпуты для ввода соответствующих данных и кнопка добавить.

// Также нужно реализовать валидацию, чтобы нельзя было добавить контакт с каким-то пустым полем

const contactEl = document.getElementById('input-user-information');
const inputNewUserName = document.getElementById('input-name');
const inputNewUserSurname = document.getElementById('input-surname');
const inputNewUserTelefon = document.getElementById('input-tel');
const NEW_USER_TEMPLATE = `
        <tr id="user-information">
          <td id="user-name">$name$</td>
          <td id="user-surname">$surname$</td>
          <td id="user-tel">$tel$</td>
          <td><button class="button-delete-user">Удалить</button></td>
        </tr>
`;
// const addNewUserBtn = document.getElementById('button-add-user');

const userName = document.getElementById('user-name');
const userSurname = document.getElementById('user-surname');
const userTel = document.getElementById('user-tel');
const deleteBtn = document.getElementById('button-delete-user');

document.getElementById('button-add-user').addEventListener('click', onAddNewUserBtnClick); // получаю элемент кнопку, назначаю ей событие по клику и запускаю функцию

init();

function onAddNewUserBtnClick () { // начало функции 'on' даёт понять что это обработчик события, дальше указывается элемент на который мы вешаем обработчик события 'NewUserBtn' и потом само событие "click"
  if (isInputValue(inputNewUserName.value)) {
    // console.log('add', inputNewUserName.value);
    addNewUser(inputNewUserName.value, inputNewUserSurname.value, inputNewUserTelefon.value);
    resetForms();
  }
  // console.log('clicked', inputNewUserName.value);
}

function isInputValue (str) { // валидация вводимых данных
  return str.trim() !== ''; //---------------------------------------------------------------- доделать
}

function addNewUser(name, surname, tel) { // добавление нового пользователя с его данными
  // console.log('add', name, surname, tel);  
  const newUserTemplate = getNewUserTemplate(name, surname, tel);

  contactEl.insertAdjacentHTML('beforeend', newUserTemplate);

}

function resetForms () {
  inputNewUserName.value = '';
  inputNewUserSurname.value = '';
  inputNewUserTelefon.value = ''; // сбрасываем форму для заполнения на пустую
}



 function getNewUserTemplate (name, surname, tel) {

  return NEW_USER_TEMPLATE.replace('');
 }
 
function init () {
  addNewUser('Name 1', 'surname 1', 'tel 1');
  addNewUser('Name 2', 'surname 2', 'tel 2');
  addNewUser('Name 3', 'surname 3', 'tel 3'); // автозаполнение нескольких строк
  
}

