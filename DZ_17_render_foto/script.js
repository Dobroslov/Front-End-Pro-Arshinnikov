'use strict';

const photosList = document.getElementById('list-photo');
const photoTemplate = document.getElementById('photo-template').innerHTML;
console.log(photoTemplate);
function fetchFromServer() {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=1').then(
    (response) => response.json().then((data) => renderPhotos(data))
  );
}

fetchFromServer();

function renderPhotos(data) {
  photosList.innerHTML = ''; // делаю шаблон пустым

  data.forEach((element) => {
    renderElement(element);
  });
}

function renderElement(element) {
  const NewTemplateElement = getElementHTML(element);
  photosList.insertAdjacentHTML('beforeend', NewTemplateElement);
}

function getElementHTML(element) {
  return photoTemplate
    .replace('{{url}}', element.url)
    .replace('{{heading}}', element.title)    
}

