const DELETED_BTN_CLASS = 'delete-btn';
const USER_TASK_CLASS = 'text-task';
const DONE_TASK_CLASS = 'done';

const inputText = document.getElementById('input-task');
const templateTask = document.getElementById('task-template').innerHTML; // innerHTML позволяет получить HTML-содержимое элемента в виде строки.
const taskList = document.getElementById('task-list');

let userTasksList = [];

document
  .getElementById('add-task-btn')
  .addEventListener('click', onAddNewTaskBtnClick);

taskList.addEventListener('click', onTaskListElementClick);

initTaskList();

function onAddNewTaskBtnClick() {
  if (isInputValid(inputText.value)) {
    const newTask = createTaskObject();
    createNewTask(newTask);
    resetInput();
  }
}

function createNewTask(task) {
  userTasksList.push(task); // когда приходить новая задача, она добавляется в массив списка задач
  // saveToStorage();
  saveTaskListToStorage(userTasksList);
  renderAllTasks(userTasksList); //функция которая создаёт все контакты из массива с последними изменениями
}

function renderAllTasks(arrListTask) {
  taskList.innerHTML = ''; // делаю шаблон пустым
  arrListTask.forEach((element) => {
    renderTask(element);
  }); // массив с объектами задач перебираю через forEach и наполняю каждые элемент через шаблон
}

function renderTask(task) {
  // функция визуализации контактов в DOM дереве
  const NewTemplateTask = getTaskHTML(task);

  taskList.insertAdjacentHTML('beforeend', NewTemplateTask);
}

function onTaskListElementClick(event) {
  // функция по выполнению которой меняется выделение выбранной задачи на выполненную
  // event - это объетк события, в котором много разной информации о событии, в том числе и его место и его значение
  if (event.target.classList.contains(USER_TASK_CLASS)) {
    // у цели события через classList проверяю есть ли такой класс у элемента как (task-string), тут это класс строки с задачей, если нет, то пропуск, если есть, то меняю цвет
    handleElement(event.target); // запускаю функцию смены класса и в неё передаю таргет(объект или конкретный элемент, на котором это событие произошло)
  }
  if (event.target.classList.contains(DELETED_BTN_CLASS)) {
    const taskId = getTaskId(event.target);
    deleteTask(taskId);
  }
}

function getTaskId(element) {
  const row = element.closest('.' + USER_TASK_CLASS);
  return +row.dataset.taskId; // приведение к числу, так как на выходе dataset получается строка
}

function handleElement(element) {
  // переключаем (добавляем или убираем 'done') класс(цвет) на элементе списка
  element.classList.toggle(DONE_TASK_CLASS);
  taskId = getTaskId(element);
  userTasksList.forEach((taskObject) => {
    if (taskObject.id === taskId) {
      // находим объект по ID
      //taskObject.selected = element.classList.contains(DONE_TASK_CLASS); более короткий вариант кода, но менее информативный для меня
      if (element.classList.contains(DONE_TASK_CLASS)) {
        taskObject.selected = true; // меняем свойство SELECTED на true
      } else {
        taskObject.selected = false; //меняем свойство SELECTED на false
      }
    }
  });
  saveTaskListToStorage(userTasksList);
}

function deleteTask(id) {
  // функция удаления строки задачи(шаблона). Сюда приходит через element - id строки которую нужно удалить
  userTasksList = userTasksList.filter((task) => task.id !== id); //Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции? поэтому я переписываю имеющийся массив и оставляю там все элементы, которые не соответствуют выброному ID
  saveTaskListToStorage(userTasksList);
  renderAllTasks(userTasksList);
  // removeTaskElement(id);
}

function isInputValid(text) {
  return text.trim() !== '';
}

function resetInput() {
  inputText.value = '';
}

function getTaskHTML(value) {
  let classes = value.selected ? DONE_TASK_CLASS : '';
  console.log(classes);
  return templateTask
    .replace('$content$', value.taskContent)
    .replace('$id$', value.id)
    .replace('$classes$', classes);
}

function createTaskObject() {
  // шаблон для данных контакта, тут я формирую содержимое данных
  return {
    id: Date.now(),
    taskContent: inputText.value,
    selected: false,
  };
}

function saveTaskListToStorage(userTasksList) {
  localStorage.setItem('userTasksList', JSON.stringify(userTasksList)); //localStorage - обращаюсь к локальному хранилищу, setItem - запиши в своё хрнилище следующие данные, 'userTasksList' - ключ, userTasksList - значение. JSON. - формат для хранения JS объектов и массивов, Метод JSON.stringify() преобразует значение JavaScript в строку JSON
}

function restoreTaskList() {
  const data = localStorage.getItem('userTasksList');
  // localStorage - обращаюсь к локальному хранилищу, getItem - верни данные, 'userTasksList' - вот этого ключа.  Метод JSON.parse() разбирает строку JSON возвращает объект Object, соответствующий переданной строке JSON
  let result = [];
  if (data !== null) {
    result = JSON.parse(data);
  }
  return result;
}

function initTaskList() {
  userTasksList = restoreTaskList();
  renderAllTasks(userTasksList);
}
