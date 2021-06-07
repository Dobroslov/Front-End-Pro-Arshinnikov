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

init(); // функция запускающая введение трёх пользователей по умолчанию

function onAddNewUserBtnClick () { // начало функции 'on' даёт понять что это обработчик события, дальше указывается элемент на который мы вешаем обработчик события 'NewUserBtn' и потом само событие "click"
  if (isInputValue(inputNewUserName.value, 
                  inputNewUserSurname.value, 
                  inputNewUserTelefon.value)) {
    // console.log('add', inputNewUserName.value, inputNewUserSurname.value, inputNewUserTelefon.value);    
    addNewUser(inputNewUserName.value, 
              inputNewUserSurname.value, 
              inputNewUserTelefon.value);    

    resetForms();
  }
  // console.log('clicked', inputNewUserName.value);
}



function isInputValue (name, surname, tel) { // валидация вводимых данных
  return name.trim() !== '' 
        && surname.trim() !== '' 
        && tel.trim() !== ''; // trim обрезает пробелы по бокам строки
}

function addNewUser(name, surname, tel) { // добавление нового пользователя с его данными
  // console.log('add', name, surname, tel);   
  let currentIndex = document.getElementsByClassName('user-information').length; // получаю колличество элементов в таблице с контактами и присваиваю это значение переменной
  const newUserTemplate = getNewUserTemplate(name, surname, tel, currentIndex); // здесь готовый и заполненный шаблон данными нового пользователя
  // console.log('add template', newUserTemplate); 
  listContacts.insertAdjacentHTML('beforeend', newUserTemplate); // вставляю HTML код на страницу "на лету"

  addEventForDeleteBtn(currentIndex); // внутри функции в которой создаётся пользователь я создаю функцию удаление пользователя и в аргумент добавляю порядковый номер пользователя
}

function resetForms () {// сбрасываем форму для заполнения на пустую
  inputNewUserName.value = '';
  inputNewUserSurname.value = '';
  inputNewUserTelefon.value = ''; 
}

function getNewUserTemplate (name, surname, tel, index) { // добавление значение инпутов в HTML шаблон

  return newUserTemplate
    .replace('$name$', name)
    .replace('$surname$', surname)
    .replace('$tel$', tel)
    .replace('$index$', index); // здесь добавляется порядковый номер в id для кнопки delete оно берётся из "let currentIndex ="
    // добавление значения в форме, которое ввёл пользователь через инпут
 }
 
function addEventForDeleteBtn (index) {// в аргументе передан порядковый номер пользователя
  let deleteButton = document.getElementById('button-delete-user-' + index); // получаю 
  deleteButton.addEventListener('click', onDeleteUserBtnClick); // создаю событие клика по кнопке удалить и запускаю функцию удаления
  console.log(deleteButton);
  // получаю элемент кнопку удаления пользователя назначаю ей событие по клику и запускаю функцию
}

function onDeleteUserBtnClick (event) { // фунция удаления элемента, в скобках объект события
  let target = event.target; // получаем ссылку на ДОМ элемент на котором произошло событие
  let targetRow = target.closest('.user-information'); // метод closest возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору (.user-information)
  targetRow.remove(); // удаляет элемент из DOM дерева 
  // console.log('clicked', targetRow);
}

function init () {
  addNewUser('Name 1', 'surname 1', 'tel 1');
  addNewUser('Name 2', 'surname 2', 'tel 2');
  addNewUser('Name 3', 'surname 3', 'tel 3'); // автозаполнение нескольких строк  
}