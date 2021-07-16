

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'; // ссылка для альбомов
const PHOTOS_URL =
  'https://jsonplaceholder.typicode.com/photos?albumId={{albumId}}'; // ссылка для фотографий в конкретном альбоме, в конце заменяемый элемент на нужный по номеру альбом

const ALBUM_ITEM_CLASS = 'album-item';

const albumsEl = document.querySelector('#albums');
const photosEl = document.querySelector('#photos');

const albumItemTemplate =
  document.querySelector('#albumItemTemplate').innerHTML;
const photoItemTemplate =
  document.querySelector('#photoItemTemplate').innerHTML;

init();

function init() {
  getAlbums().then(getFirstAlbumPhotos);
}
function getPhotos(albumId) {
  return fetch(getPhotoUrl(albumId))
    .then((resp) => resp.json())
    .then(renderPhotos);
}

function getPhotoUrl(albumId) {
  return PHOTOS_URL.replace('{{albumId}}', albumId); // заменяю в шаблоне номер альбома {{albumId}} на фактический номер
}

function renderPhotos(data) {
  photosEl.innerHTML = data
    .map((photo) => generatePhotoHtml(photo)) // на выходе из массива с объектами будет массив строк. И каждая строка это будет HTML, который отвечает за каждую конкретную фотографию с правильно подставленным src
    .join('\n'); // весь массив соединяю через символ "переноса строки" это по сути влияет на отображение исходного кода в HTML
}

function generatePhotoHtml(photo) {
  return photoItemTemplate
    .replace('{{url}}', photo.thumbnailUrl)
    .replace('{{title}}', photo.title);
}

function getAlbums() {
  return fetch(ALBUM_URL) // получаю ссылку на альбомы и делаю fetch запрос
    .then((resp) => resp.json()) // преобразую ответ fetch в формат json, т.е. в массив объектов
    .then(
      (data) => {
        renderAlbums(data); // массив передаю в функцию renderAlbums
        return data;
      } // возвращаю массив албомов
    );
}

function renderAlbums(data) {
  // сюда приходит массив с альбомами из родительской функции
  albumsEl.innerHTML = data // всю HTML строку из .join('\n') я вставляю в маект HTML на странице
    .map((album) => generateAlbumHtml(album)) // массив превращаю в строку
    .join('\n'); // соединяю все строки в одну строку с переносом строки в одну HTML строку
}

albumsEl.addEventListener('click', onAlbumsClick);

function generateAlbumHtml(album) {
  return albumItemTemplate
    .replace('{{id}}', album.id)
    .replace('{{title}}', album.title);
}

function onAlbumsClick(e) {
  if (e.target.classList.contains(ALBUM_ITEM_CLASS)) {
    getPhotos(e.target.dataset.id);
  }
}

function getFirstAlbumPhotos(data) {
  if (data.length) {
    // если массив не пустой
    getPhotos(data[0].id); // тогда взять первый из списка и взять его id
  }
}
