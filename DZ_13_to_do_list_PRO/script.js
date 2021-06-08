const inputText = document.getElementById('input-task');
const templateTask = document.getElementById('task-template').innerHTML; // innerHTML позволяет получить HTML-содержимое элемента в виде строки.
const taskList = document.getElementById('task-list');

document
  .getElementById('add-task-btn')
  .addEventListener('click', onAddNewTaskBtn);

taskList.addEventListener('click', onTaskListElementClick);

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

function onTaskListElementClick(event) {
  // event - это объетк события, в котором много разной информации о событии, в том числе и его место и его значение
  if (event.target.classList.contains('task-string')) {
    // у цели события через classList проверяю есть ли такой класс у элемента как (task-string), тут это класс строки с задачей, если нет, то пропуск, если есть, то меняю цвет
    toggleListElement(event.target); // запускаю функцию смены класса и в неё передаю таргет(объект или конкретный элемент, на котором это событие произошло)
  }
}

function toggleListElement(element) {
  // переключаем класс(цвет) на элементе списка
  element.classList.toggle('done');
}

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
