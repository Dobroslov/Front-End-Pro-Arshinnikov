// На странице находится инпут и кнопка. Список изначально пустой


// Пользователь может ввести что-то в инпут и нажать на кнопку, после этого в списке выше должна отобразится строка с тем что было введено в инпуте. Инпут очищается.

// если пользователь нажал добавить, но содержимое пустое, то ничего не делать.

// в каждом элементе справа должны быть кнопочка удалить. Сложный элемент

const listContainer = document.getElementById('listContainer'); // вызов списка ul
const buttonSubmitTask =  document.getElementById('saveTask'); // кнопка сабмит
const inputText = document.getElementById('inputText'); // вызов текстового поля инпута
const template = `
<li class="task-performed">
    <span class="task-text" id="textTask"></span>
    <button class="button-delet-task">Delete</button>
</li> 
`; // переменная в которой содержится html код для лишки

buttonSubmitTask.addEventListener('click', clickHandler); // получаем элемент button в него добавляем список событий с событием 'click'(одинарное нажатие кнопки мыши) и запускаем функцию clickHandler
inputText.addEventListener('change', clickHandler); // получаем элемент input в него добавляем список событий с событием 'change' (которое будет валидаций для пустого ввода?) (одинарное нажатие кнопки мыши) и запускаем функцию clickHandler

function clickHandler () {
  const li = listContainer.insertAdjacentHTML('beforeend', template); // создаём элемент <li>
  
  document.getElementById('listContainer').append(li) //получаем список ul с id="list" и добавляем в этот ul нашу лишку с текстом
  textTask.textContent = inputText.value;
  inputText.value = ' ';
  return li;
}

function clickHandler () {
  const createString = document.createElement('template'); // создаём элемент <li>
}

function createNewTask () { // создание новой задачи

}

function isValueValid () {

} // Валидация вводимого значения на пустую строку

