class FormController {
  constructor(url, circleField, formData) {
    this.socketService = new SocketService(url);
    this.circleField = circleField;
    this.idCircle = Date.now();
    this.messageData = {
      type: 'add',
      payload: {
        id: this.idCircle,
        color: 'red',
        size: 50,
        x: 50,
        y: 50,
      },
    };
    this.initSocket();
    this.start(formData, this.messageData);
  }

  initSocket() {
    let config = {
      onOpen: this.onSockedOpen.bind(this),
      onNewMessage: this.onNewMessage.bind(this),
      onClose: this.onSockedClose.bind(this),
      onError: this.onSockedError.bind(this),
    };

    this.socket = this.socketService.createSocket(config);
  }

  start(formData, messageData) {
    let templateCircle = this.getCircleHtmlTemplate(messageData);
    this.circleField.innerHTML(templateCircle);
    formData.addEventListener('submit', this.onFormSubmit.bind(this));
  }

  onSockedOpen(event) {
    let socket = event.target;    

    console.log('[open] Соединение установлено');
    this.socketService.sendCircleData(socket, this.messageData);
    this.renderCircles(this.messageData);
    console.log('Отправляем данные на сервер');
  }

  onNewMessage(event) {
    console.log(`[message] Данны получены с сервера: ${event.data}`, event);
    const messageData = JSON.parse(event.data);
    console.log('incomingMessage', messageData);
    this.renderCircles(messageData);
  }

  onSockedClose(event) {
    if (event.wasClean) {
      console.log(
        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
      );
    } else {
      console.log(`[close] Соединение прервано`);
      this.initSocket();
    }
  }

  onSockedError(error) {
    console.log(`[error] ${error.message}`);
  }

  onFormSubmit(event) {
    event.preventDefault();
    let sizeCircle = formData.elements['input-size'].value;
    let colorCircle = formData.elements['input-color'].value;
  }

  getCircleHtmlTemplate({payload}) {  
    return `<div class="circle" id="${payload.id}"></div>`;
  }

  renderCircles(messageData) {}
}
//   const circleEl = document.getElementById('circle');

//   circleEl.addEventListener('mousedown', onMouseDown);

//   function onMouseDown() {
//     circleEl.addEventListener('mousemove', onMouseMove);
//     circleEl.addEventListener('mouseup', onMouseUp);
//   }

//   function onMouseMove(e) {
//     move(e.x, e.y);
//     send({
//       type: 'move',
//       payload: { x: e.x, y: e.y },
//     });
//   }

//   function move(x, y) {
//     circleEl.style.left = x - 25 + 'px';
//     circleEl.style.top = y - 25 + 'px';
//   }

//   function onMouseUp() {
//     circleEl.removeEventListener('mousemove', onMouseMove);
//     circleEl.removeEventListener('mouseup', onMouseUp);
//   }
// }

// renderCircles(data) {
