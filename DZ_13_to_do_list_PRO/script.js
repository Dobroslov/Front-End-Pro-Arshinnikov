const inputText = document.getElementById('input-task');
const templateTask = document.getElementById('task-template').innerHTML; // innerHTML позволяет получить HTML-содержимое элемента в виде строки.
const taskList = document.getElementById('task-list');

document
  .getElementById('add-task-btn')
  .addEventListener('click', onAddNewTaskBtn);

taskList.addEventListener('click', onTaskListClick);

function onAddNewTaskBtn() {
  if (isInputValue(inputText.value)) {
    // console.log("clicked", inputText.value);

    addNewTask(inputText.value);
    resetInput();
  }
}

function addNewTask(value) {
  const NewTemplateTask = getNewTemplateTask(value);

  taskList.insertAdjacentHTML('beforeend', NewTemplateTask);
  // console.log('addNewTask', value);
}

function getNewTemplateTask(value) {
  // console.log('addtemplate', value);
  return templateTask.replace('$content$', value);
}

function onTaskListClick() {}

function isInputValue(text) {
  return text.trim() !== '';
}

function resetInput() {
  inputText.value = '';
}

init();

function init() {
  addNewTask('Это задача 1');
  addNewTask('Это задача 2');
  addNewTask('Это задача 3');
}

function addEventForDeleteBtn(index) {}
function onDeleteUserBtnClick(event) {}

// let target = event.target; // получаем ссылку на ДОМ элемент на котором произошло событие
// let targetRow = target.closest('.user-information'); // метод closest возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору (.user-information)
// targetRow.remove();
