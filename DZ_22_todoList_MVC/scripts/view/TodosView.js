const DELETE_BTN = '.delete-btn';
const ITEM_SELECTOR = '.task-item';

class TodosView {
  constructor($el, config={}) {
    this._container = $el; // принимаем контейнер в котором будем строить нашу структуру
    this._$list = null; // создаю пустую переменную для элемента списка задач
    this._config = config;
    this.initView();
  }

  initView() {
    this._$list = $('.task-list');
    this._$list.on('click', DELETE_BTN, this.onListClick.bind(this));
    this._container.append(this._$list);
  }

  onListClick(e) {
    const id = this.getElementId($(e.target));

    this._config.onDelete(id)
  }

  renderList(list) {
    this._$list.html(list.map(this.getListItemHtml).join(''));
  }

  getListItemHtml({ id, title }) {
    return `<div class="task-item" data-todo-id="${id}">${title}<button class="delete-btn">X</button></div>`;
  }

  getElementId($el) {
    return $el.closest(ITEM_SELECTOR).data('todoId');
  }

  toggleElement() {
    
  }
}
