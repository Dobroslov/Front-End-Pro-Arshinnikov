import '../../styles/style.css'


const DELETE_BTN = '.delete-btn';
const ITEM_SELECTOR = '.task-item';
const ADD_BTN = '#add-task-btn';
const INPUT_TEXT = '#input-task';
const INFO_TEXT = '#info-text';

export default class TodosView {
  constructor($el, config = {}) {
    this._container = $el; // принимаем контейнер в котором будем строить нашу структуру
    this._$list = null; // создаю пустую переменную для элемента списка задач
    this._config = config;
    this.$taskInput = $('#input-task');

    this.initView();
  }

  initView() {
    this._$list = $('.task-list');
    this._$list.on('click', DELETE_BTN, this.onListClick.bind(this));
    $(ADD_BTN).on('click', this.onAddBtnClick.bind(this));
    this._container.append(this._$list);
    this._$list.on('click', ITEM_SELECTOR, this.toggleElement.bind(this));
  }

  onAddBtnClick() {
    const textInput = $(INPUT_TEXT);
    const infoText = $(INFO_TEXT);
    const newTitle = textInput.val();
    if (newTitle !== '') {const newTodo = { title: newTitle, isDone: false };

    this.clearInput();
    this._config.onAddTask(newTodo).then(() => infoText.show().fadeOut(1500));}
    
  }

  onListClick(e) {
    const id = this.getElementId($(e.target));

    this._config.onDelete(id);
  }

  renderList(list) {
    this._$list.html(list.map(this.getListItemHtml).join(''));
  }

  clearInput() {
    this.$taskInput.val('');
  }

  getListItemHtml({ id, title, isDone }) {
    let classHtml = isDone ? 'task-done' : 'task-not-done';
    return `<div class="task-item ${classHtml}" data-todo-id="${id}">${title}<button class="delete-btn">X</button></div>`;
  }

  getElementId($el) {
    return $el.closest(ITEM_SELECTOR).data('todoId');
  }

  toggleElement(e) {
    let target = $(e.target)
    if (!target.is(':button')) {
    const id = this.getElementId($(e.target));
    
    this._config.onToggleTask(id);
    }
  }
}
