const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=100';
const PAGE_SIZE = 7; // задаю колличество элементов на странице

const photosEl = document.querySelector('#photos'); // выбираю элемент или контейнер, в котором будут храниться фотографии
const paginationListElement = document.getElementById('pagination'); // выбираю элемент ul для хранения кнопок
const photoItemTemplate =
  document.querySelector('#photoItemTemplate').innerHTML; // выбираю элемент с шаблоном для фотографии и преобразую его в строку

init();

function init() {
  getPhotos().then(renderData);
}

function getPhotos() {
  return fetch(PHOTOS_URL) // получаю промис из ссылки
    .then((resp) => resp.json()) // преобразую промис с помощью json
    .then((data) => {
      // renderPhotos(data);
      return data;
    });
}

function renderData(arr) { // передаю массив из промиса и рендерю его
  let pagination = getPaginationObj(arr); 
  // получаю класс с его параметрами и методами
  renderPagination(pagination);
  renderContent(arr, pagination);
}

function getPaginationObj(arr) {
  // передаю массив c данными
  return new Pagination(PAGE_SIZE, arr.length, 1); // возвращаю новый объект с задаными параметрами: 1) количество элементов на странице 2) общее количество элементов в массиве 3) значение или номер выбранной страницы по умолчанию
}


function renderPagination(pagination) { // визуализация кнопок переключающих страницы с фотографиями
  for (let index = 0; index < pagination.getPagesNumber(); index++) {
    paginationListElement.insertAdjacentHTML(
      'beforeend',
      getPaginationItemHtml(index + 1) // задаю в аргументе номер визуализируемой кнопки
    ); // в список ul для кнопок переключения добавляю через цикл по одной кнопке на указанное количество фотографий
  }
}

function getPaginationItemHtml(index) {
  return '<li class="page">{{number}}</li>'.replace('{{number}}', index); // заменяю в шаблоне элемент "{{number}}" на номер страницы
}


function renderContent(arr, pagination) {
  // передаётся весь массив со всеми фотографиями и класс pagination
  pagination.setActivePageNumber(1);
  let photos = arr.slice(
    pagination.getActivePageNumber() - 1,
    pagination.getPageSize()
  ); // формула которая высчитывает начальный элемент обрезания массива и конечный, а затем методом ".slice" обрезаю массив и на выходе получаю массив из нужного колличества элементов массива для рендера конкретной страницы
  renderPhotosOnPage(photos); // передаю сюда массив с элементами для рендера конкретной страницы
}

function renderPhotosOnPage(data) {
  photosEl.innerHTML = data
    .map((photo) => generatorPhotoHTML(photo))
    .join('\n');
}

function generatorPhotoHTML(photo) {
  return photoItemTemplate
    .replace('{{url}}', photo.thumbnailUrl)
    .replace('{{title}}', photo.title);
}
// ререндер контента по клику на элемент pagination списка (li)

// function generateButtonHtml(album) {
//   return buttonTemplate
//     .replace('{{id}}', album.id)
//     .replace('{{title}}', album.albumId);
// }
