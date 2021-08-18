class FormController {
  constructor(url, circleField, formData) {
    this.socketService = new SocketService(url);
    this.circleField = circleField;
    this.formData = formData; // ??

    this.initSocket();
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

  onSockedOpen(event) {
    let socket = event.target;
    let data = {
      type: 'update',
      payload: {
        id: 'uniqueID',
        color: 'red',
        size: '50px',
        x: '0',
        y: '0',
      },
    };

    console.log('[open] Соединение установлено');
    this.socketService.sendCircleData(socket, data);
    console.log('Отправляем данные на сервер');
  }

  onNewMessage(event) {
    console.log(`[message] Данные получены с сервера`);
  }
}
