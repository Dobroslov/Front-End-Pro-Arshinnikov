class TodosCollection {
  constructor(url) {
    this._url = url;
    this.list = []; // пустой список с данными для заполнения
  }

  fetchTodos() {
    return fetch(this._url) // возвращает промис, и на него можно использовать .then
      .then((resp) => resp.json())
      .then((data) => this.setData(data));
  }

  setData(data) {
    return (this.list = data); // возвращает заполненный список(массив) с данными
  }

  deleteTodo(id) {
    this.list = this.list.filter((item) => item.id != id); // в список перезаписываю старый вариант списка отфильтрованный по принципу: добавить все элементы, кроме эелемента с таким же id (который мы передаём в функцию)

    return fetch(`${this._url}${id}`, { method: 'DELETE' }).then((resp) =>
      resp.json()
    ); // возвращаем promis с уже обновлённым списком
  }

  addTodo(todoItem) {    
    if (todoItem.title === ``) {
      return;
    }

    return fetch(this._url, {
      method: 'POST',
      body: JSON.stringify(todoItem),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => this.addData(data));
  }

  addData(data) {
    this.list.unshift(data);
  }

  toggleTodo(id) {
    this.item = this.list.find((item) => item.id == id);
    this.item.isDone = !this.item.isDone;
    

    
    return fetch(`${this._url}${id}`, {
      method: 'PUT',
      body: JSON.stringify(this.item),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((resp) => resp.json());
  }
}
