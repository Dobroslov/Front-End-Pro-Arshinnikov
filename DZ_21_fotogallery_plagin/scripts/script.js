$(document).ready(function () {
  const photosUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=21'; // ссылка для фотографий в конкретном альбоме, в конце заменяемый элемент на нужный по номеру альбом

  const templatePhoto = $('#photoItemTemplate').html();
  const photoList = $('.images');

  let photoArr = [];

  init();

  function init() {
    fetchPhotos();
  }

  function fetchPhotos() {
    fetch(photosUrl)
      .then((resp) => resp.json())
      .then(setPhotos)
      .then(renderPhotosList);
  }

  function setPhotos(data) {
    return (photoArr = data);
  }

  function renderPhotosList(photoArr) {
    $(photoList).html(photoArr.map(getItemHtml).join(''));
  }

  function getItemHtml(photoObj) {
    return templatePhoto
      .replace('{{smallPhotoUrl}}', photoObj.thumbnailUrl)
      .replace('{{bigPhotoUrl}}', photoObj.url);
  }
});
