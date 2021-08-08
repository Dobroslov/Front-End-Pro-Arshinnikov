'use strict';

import TodosController from './controller/TodosController';

$(() => {
  new TodosController($('.task-list'));
});
