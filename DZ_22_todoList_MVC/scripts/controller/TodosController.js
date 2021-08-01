class TodosController {
  constructor($el) {
    // передаём в конструктор "div" с классом ".task-list" для наполнения задачами

    this.initCollection();
    this.initView($el);
  }

  initCollection() {
    // функция для инициализации коллекции
    this.todosCollection = new TodosCollection(TODOS_URL); // инициализируем новую "collection" и передаём туда url с массивом данных по задачам

    this.todosCollection
      .fetchTodos()
      .then(() => this.renderList(this.todosCollection.list));
  }

  initView($el) {
    // функция для инициализации "view"
    this.todosView = new TodosView($el, {// объект для хранения ссылок для событий удаления, добавления элементов и тогла. Это способ связи между разными классами
      onDelete: this.deleteTodo.bind(this),
      onAddTask: this.addTodo.bind(this),
      onToggleTask: this.toggleTodo.bind(this),
    }); // инициализируем новый "view"
  }

  renderList() {
    this.todosView.renderList(this.todosCollection.list);
  }

  addTodo(todoItem) {
    return this.todosCollection.addTodo(todoItem)
    .then(() => this.renderList());
  }

  toggleTodo(id) {
    return this.todosCollection.toggleTodo(id).then(() => this.renderList());
   
  }

  deleteTodo(id) {
    this.todosCollection.deleteTodo(id);

    this.renderList();
  }
}
