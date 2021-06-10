const DELETED_BTN_CLASS = 'delete-btn';
const TEXT_TASK_CLASS = 'text-task';

const inputText = document.getElementById('input-task');
const templateTask = document.getElementById('task-template').innerHTML; // innerHTML позволяет получить HTML-содержимое элемента в виде строки.
const taskList = document.getElementById('task-list');

const userTaskList = [];

document
  .getElementById('add-task-btn')
  .addEventListener('click', onAddNewTaskBtn);

taskList.addEventListener('click', onTaskListElementClick);

function onAddNewTaskBtn() {
  if (isInputValue(inputText.value)) {
    const newTask = getFormTaskDate();
    addTask(newTask);
    resetInput();
  }
}

function addTask(task) {
  userTaskList.push(task); // когда приходить новая задача, она добавляется в массив списка задач
  // saveToStorage();
  renderAllTasks(userTaskList); //функция которая создаёт все контакты из массива с последними изменениями
}

function renderAllTasks(arrListTask) {
  taskList.innerHTML = ''; // делаю шаблон пустым
  arrListTask.forEach((element) => {
    renderTask(element); // массив с объектами задач перебираю через forEach и наполняю каждые элемент через шаблон
  });
}

function renderTask(task) {
  // функция визуализации контактов в DOM дереве
  const NewTemplateTask = getNewTemplateTask(task);

  taskList.insertAdjacentHTML('beforeend', NewTemplateTask);
}

function onTaskListElementClick(event) {
  // функция по выполнению которой меняется выделение выбранной задачи на выполненную
  // event - это объетк события, в котором много разной информации о событии, в том числе и его место и его значение
  if (event.target.classList.contains(TEXT_TASK_CLASS)) {
    // у цели события через classList проверяю есть ли такой класс у элемента как (task-string), тут это класс строки с задачей, если нет, то пропуск, если есть, то меняю цвет
    toggleListElement(event.target); // запускаю функцию смены класса и в неё передаю таргет(объект или конкретный элемент, на котором это событие произошло)
  }
  if (event.target.classList.contains(DELETED_BTN_CLASS)) {
    deleteListElement(event.target.closest('.' + TEXT_TASK_CLASS)); // запуск функции, которая удалить элемент в неё передаю селектор ".delete-btn"
  }
}

function toggleListElement(element) {
  // переключаем (добавляем или убираем 'done') класс(цвет) на элементе списка
  element.classList.toggle('done');
}

function deleteListElement(element) {
  // функция удаления строки задачи(шаблона). Сюда приходит через element - event.target

  element.remove();
}

function isInputValue(text) {
  return text.trim() !== '';
}

function resetInput() {
  inputText.value = '';
}

function getNewTemplateTask(value) {
  return templateTask
    .replace('$content$', value.taskContent)
    .replace('$id$', value.id);
}

function getFormTaskDate() {
  // шаблон для данных контакта, тут я формирую содержимое данных
  return {
    id: Date.now(),
    taskContent: inputText.value,
  };
}

init();

function init() {
  addTask({
    id: Date.now(), //создаётся рандомное число, опираясь на текущее время
    taskContent: 'Это задача 1',
  });
  addTask({
    id: Date.now(),
    taskContent: 'Это задача 2',
  });
  addTask({
    id: Date.now(),
    taskContent: 'Это задача 3',
  });
}
