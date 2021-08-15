const url = 'wss://fep-app.herokuapp.com/';

const inputName = document.getElementById('input-name');
const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit-btn');
const listMessages = document.getElementById('window-list-messages');

submitBtn.addEventListener('click', onBtnSubmitNewMessage);

function initConnection() {
  let socket = new WebSocket(url);

  socket.onopen = function () {
    // проверка открылось ли соединение
    console.log('[open] Соединение установлено');
    console.log('Отправляем данные на сервер');
  };

  socket.onmessage = (msg) => {
    console.log(`[message] Данные получены с сервера: ${msg.data}`, msg);
    const incomingMessage = JSON.parse(msg.data);
    renderMessage(incomingMessage);
  };

  socket.onclose = function (event) {
    // закрытие соединения
    if (event.wasClean) {
      console.log(
        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
      );
    } else {
      console.log(`[close] Соединение прервано`);
      initConnection();
    }
  };

  socket.onerror = function (err) {
    console.log(`[error] ${err.message}`);
  };
}

initConnection();

function onBtnSubmitNewMessage() {
  const newMessage = getFormDate();
  if (isInputValue(inputName.value, inputText.value)) {
    sendMessage(newMessage);
    renderMessage(newMessage);
    resetFormMessage();
  }
}

function isInputValue(user, message) {
  return user.trim() !== '' && message.trim() !== '';
}

function getFormDate() {
  return (message = {
    type: 'userMessage',
    payload: { user: inputName.value, message: inputText.value },
  });
}

function renderMessage(newMessageObj) {
  return listMessages.insertAdjacentHTML(
    'beforeend',
    `
    <p>
      ${newMessageObj.payload.user}: <span class="text">${newMessageObj.payload.message}</span>
    </p>`
  );
}

function resetFormMessage() {
  inputText.value = '';
}

function sendMessage(message) {
  socket.send(JSON.stringify(message));
}
