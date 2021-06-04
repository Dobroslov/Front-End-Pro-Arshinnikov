// На странице находится инпут и кнопка. Список изначально пустой

// Пользователь может ввести что-то в инпут и нажать на кнопку, после этого в списке выше должна отобразится строка с тем что было введено в инпуте. Инпут очищается.

// если пользователь нажал добавить, но содержимое пустое, то ничего не делать.

// в каждом элементе справа должны быть кнопочка удалить. Сложный элемент

const listContainer = document.getElementById('listContainer'); // вызов списка ul

const inputText = document.getElementById('inputText'); // вызов текстового поля инпута

const buttonSubmitTask =  document.getElementById('saveTask'); // вызов кнопки сабмит

const template = `
<li class="task-performed">
    <span class="task-text">$CONTENT$</span>    
    <button class="button-deletе-task">Delete</button>
</li> 
`; // переменная в которой содержится шаблон html кода для лишки

buttonSubmitTask.addEventListener('click', createNewTask); // получаем элемент button в него добавляем список событий с событием 'click'(одинарное нажатие кнопки мыши) и запускаем функцию clickHandler

function createNewTask () {
  if (inputText.value !== '') { // условие для пустой строки, пока строка пустая, то не создавать новую задачу
    let content = template.replace('$CONTENT$', inputText.value); // через replace делаю замену $CONTENT$ в HTML шаблоне на текущее значение инпута(inputText.value)
    listContainer.insertAdjacentHTML('beforeend', content); // в ul добавляю кусоку HTML кода в низ списка ('beforeend')
    inputText.value = ''; // делаю значение инпута пустым после всех действий
  }
}