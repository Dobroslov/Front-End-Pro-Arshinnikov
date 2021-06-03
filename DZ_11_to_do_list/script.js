// На странице находится инпут и кнопка. Список изначально пустой


// Пользователь может ввести что-то в инпут и нажать на кнопку, после этого в списке выше должна отобразится строка с тем что было введено в инпуте. Инпут очищается.

// если пользователь нажал добавить, но содержимое пустое, то ничего не делать.

// в каждом элементе справа должны быть кнопочка удалить. Сложный элемент

const listContainer = document.getElementById('listContainer'); // вызов списка ul
const buttonSubmitTask =  document.getElementById('saveTask'); // кнопка сабмит
const inputText = document.getElementById('inputText'); // вызов текстового поля инпута


buttonSubmitTask.addEventListener('click', clickHandler); // получаем элемент button с id="myBtn" в него добавляем список событий с событием 'click'(одинарное нажатие кнопки мыши) и запускаем функцию с добавлением лишки и текста

function clickHandler () {
  const li = listContainer.insertAdjacentHTML('beforeend', template); // создаём элемент <li>
  
  document.getElementById('list').append(li) //получаем список ul с id="list" и добавляем в этот ul нашу лишку с текстом
}


const template = `
<li class="task-performed">
    <span class="task-text"></span>
    <button class="button-delet-task">Delete</button>
</li> 
`;
document.body.; // для вставки куска кода




.addEventListener('click', clickHandler);


function clickHandler () {
  const createString = document.createElement('template'); // создаём элемент <li>
}

function createNewTask () { // создание новой задачи

}

function isValueValid () {

} // Валидация вводимого значения на пустую строку

