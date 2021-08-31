const url = 'ws://fep-app.herokuapp.com/';
const containerEl = document.getElementById('container');
let socket = null;

const myCircle = {
  id: Date.now(),
  radius: 100,
  color: 'red',
  x: 150,
  y: 150,
};

function initSocket() {
  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('[open] Соединение установлено');
    console.log('Отправляем данные на сервер');
  };

  socket.onmessage = (msg) => {
    console.log(`[message] Данные получены с сервера: ${msg.data}`);
    const data = JSON.parse(msg.data);
    moveCircle(data.payload.x, data.payload.y);
  };

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(
        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
      );
    } else {
      console.log('[close] Соединение прервано');
      initSocket();
    }
  };

  socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
  };
}

function sendMessage(msg) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(msg));
  }
}

initSocket();
console.log(socket);

containerEl.insertAdjacentHTML('beforeend', getFormField());

const circleField = document.getElementById('window-for-circles');
const formDate = document.forms['circle-field'];

createMyCircle();

const circleEl = document.querySelector('.circle');
circleEl.addEventListener('mousedown', onMouseDown);

function onMouseDown() {
  circleEl.addEventListener('mousemove', onMouseMove);
  circleEl.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(e) {
  moveCircle(e.x, e.y);
  sendMessage({
    type: 'move',
    payload: {
      x: e.x,
      y: e.y,
    },
  });
}

function onMouseUp() {
  circleEl.removeEventListener('mousemove', onMouseMove);
  circleEl.removeEventListener('mouseup', onMouseUp);
}

function createMyCircle() {
  let div = document.createElement('div');
  div.className = 'circle';
  div.style.backgroundColor = 'red';
  div.style.height = 50 + 'px';
  div.style.width = 50 + 'px';
  div.style.borderRadius = 50 + "%";
  div.style.left = 100 + 'px';
  div.style.top = 100 + 'px';
  circleField.append(div);
}

function moveCircle(x, y) {
  circleEl.style.left = x - 25 + 'px';
  circleEl.style.top = y - 25 + 'px';
}

function getFormField() {
  return `<form name="circle-field">
            <label for="input-syze">Размер круга</label>
            <input type="number"name="input-size" id="input-size" placeholder="Размер круга"/>
            <label for="input-color">Цвет круга</label>
            <input type="color"name="input-color" id="input-color"/>
            <input type="submit" id="submit-btn"/>
          </form>
          <div id="window-for-circles"></div>`;
}
