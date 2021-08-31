const url = 'ws://fep-app.herokuapp.com/';
const circleField = document.getElementById('window-for-circles');
const formData = document.forms['circle-field'];

document.addEventListener('DOMContentLoaded', () => {
  new FormController(url, circleField, formData);
});
