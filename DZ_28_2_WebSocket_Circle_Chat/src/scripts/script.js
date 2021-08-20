const url = 'ws://fep-app.herokuapp.com/';
const circleField = document.getElementById('window-for-circles');
const formData = document.forms['circle-field'];

document.addEventListener('DOMContentLoaded', () => {
  new FormController(url, circleField, formData);
});

// const url = 'ws://fep-app.herokuapp.com/';
// const formData = document.forms['circle-field'];
// let socket = null;
// const idCircle = Date.now()

// const circleEl = document.getElementsByClassName('circle');
// console.log('🚀 ~ circleEl', circleEl);
// let x = circleEl.offSetWidth;
// console.log('🚀 ~ x', x)
// let y = circleEl.offsetHeight;
// console.log('🚀 ~ y', y)

// const circleData = {
//   sizeCircle: 50 + 'px',
//   colorCircle: 'green',
//   x: (circleEl.style.left = 75 - 25 + 'px'),
//   y: (circleEl.style.top = 75 - 25 + 'px'),
//   id: idCircle,
// };

// formData.elements['input-size'].value
// formData.elements['input-color'].value
// function onFormSubmit(event) {
// event.preventDefault();
// circleData = {
//   sizeCircle: 50+ 'px',
//   colorCircle: 'green',
//   x: 100 + 'px',
//   y: 100 + 'px',
//   id: idCircle,
// };
// }

// function initConnection() {
//   socket = new WebSocket(url);

//   socket.onmessage = (msg) => {
//     const data = JSON.parse(msg.data);
//     move(data.payload.x, data.payload.y);
//   };
// }

// function send(msg) {
//   if (socket.readyState === WebSocket.OPEN) {
//     socket.send(JSON.stringify(msg));
//   }
// }

// initConnection();

// formData.addEventListener('submit', onFormSubmit);
// // ----

// const circleEl = document.querySelector('.circle');

// circleEl.addEventListener('mousedown', onMouseDown);

// function onMouseDown(e) {
//   circleEl.addEventListener('mousemove', onMouseMove);
//   circleEl.addEventListener('mouseup', onMouseUp);
// }

// function onMouseUp() {
//   circleEl.removeEventListener('mousemove', onMouseMove);
//   circleEl.removeEventListener('mouseup', onMouseUp);
// }

// function onMouseMove(e) {
//   // move(e.x, e.y)
//   send({
//     type: 'move',
//     payload: {
//       x: e.x,
//       y: e.y,
//     },
//   });
// }

// function move(x, y) {
//   circleEl.style.left = x - 25 + 'px';
//   circleEl.style.top = y - 25 + 'px';
// }
