// import '../styles/style.css'

// import ControllerPhotoList from './controller/ControllerPhotoList';

const albumsList = document.getElementById('albums');
const photosList = document.getElementById('photos');

document.addEventListener('DOMContentLoaded', () => {
  new ControllerPhotoList(albumsList, photosList, config);
});
