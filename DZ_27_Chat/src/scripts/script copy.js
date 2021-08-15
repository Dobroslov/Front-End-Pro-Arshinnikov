const url = 'wss://fep-app.herokuapp.com/';

let socket = null;
// console.log(socket);

function initConnection() {
  let socket = new WebSocket(url);

  socket.onopen = function () {
    // проверка открылось ли соединение
    console.log('[open] Соединение установлено');
    console.log('Отправляем данные на сервер');
  };

  socket.onmessage = function (msg) {  // отправка сообщений
    const data = JSON.parse(msg.data);
    move(data.payload.x, data.payload.y);
    // console.log(`[message] Данные получены с сервера: ${msg.data}`, msg);
  };

  socket.onclose = function (event) {
    // закрытие соединения
    if (event.wasClean) {
      console.log(
        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
      );
    } else {
      initConnection();
      console.log(`[close] Соединение прервано`);
    }
  };

  socket.onerror = function (err) {
    // ошибка соединения
    console.log(`[error] ${err.message}`);
  };
}

initConnection();

function send(msg) {
  // функция принимает сообщение
  if (socket.readyState === WebSocket.OPEN) {
    // проверка включено ли соединение
    socket.send(JSON.stringify(msg));
  }
}

const circleEl = document.getElementById('circle');

circleEl.addEventListener('mousedown', onMouseDown);

function onMouseDown() {
  circleEl.addEventListener('mousemove', onMouseMove);
  circleEl.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(e) {
  move(e.x, e.y);
  send({
    type: 'move',
    payload: { x: e.x, y: e.y },
  });
}

function move(x, y) {
  circleEl.style.left = x - 25 + 'px';
  circleEl.style.top = y - 25 + 'px';
}

function onMouseUp() {
  circleEl.removeEventListener('mousemove', onMouseMove);
  circleEl.removeEventListener('mouseup', onMouseUp);
}
