const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=100';

const photosEl = document.querySelector('#photos');

const PAGE_SIZE = 7;
const paginationListElement = document.getElementById('pagination');
const photoItemTemplate =
  document.querySelector('#photoItemTemplate').innerHTML;
// const buttonTemplate = document.querySelector('#buttonTemplate').innerHTML;

init();

function init() {
  getPhotos().then(renderData);
}

function getPhotos() {
  return fetch(PHOTOS_URL)
    .then((resp) => resp.json())
    .then((data) => {
      // renderPhotos(data);
      return data;
    });
}

function renderPhotos(data) {
  photosEl.innerHTML = data
    .map((photo) => generatorPhotoHTML(photo))
    .join('\n');
}

function generatorPhotoHTML(photo) {
  return photoItemTemplate
    .replace('{{url}}', photo.thumbnailUrl)
    .replace('{{title}}', photo.title);
}

function generateButtonHtml(album) {
  return buttonTemplate
    .replace('{{id}}', album.id)
    .replace('{{title}}', album.albumId);
}

function renderData(arr) {
  let pagination = getPaginationObj(arr);
  renderPagination(pagination);
  renderContent(arr, pagination);
}

function getPaginationItemHtml(index) {
  return '<li class="page">{{number}}</li>'.replace('{{number}}', index);
}

function renderPagination(pagination) {
  for (let index = 0; index < pagination.getPagesNumber(); index++) {
    paginationListElement.insertAdjacentHTML(
      'beforeend',
      getPaginationItemHtml(index + 1)
    );
  }
}

function getPaginationObj(arr) {
  return new Pagination(PAGE_SIZE, arr.length, 1);
}
function renderContent(arr, pagination) {
  pagination.setActivePageNumber(2)
  let photos = arr.slice(
    pagination.getActivePageNumber() - 1,
    pagination.getPageSize()
  );
  renderPhotos(photos);
}

// ререндер контента по клику на элемент pagination списка (li)