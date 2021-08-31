class FormController {
  constructor(url, circleField, form) {
    this.socketService = new SocketService(url);
    this.circleField = circleField;
    this.form = form;
    this.idCircle = Date.now();
    this.myCircle = {
      id: this.idCircle,
      color: '#ff0000',
      size: 50,
      x: 50,
      y: 50,
    };
    this.initSocket();
    this.submit(form);
    this.arrCircles = [];
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
    console.log('[open] Соединение установлено');
    this.socketService.sendData(socket, this.myCircle);
    console.log('Отправляем данные на сервер');
  }

  onNewMessage(event) {
    console.log(`[message] Данны получены с сервера: ${event.data}`, event);
    const messageData = JSON.parse(event.data);
    this.renderCircles(messageData);
    this.moveCircle();
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

  submit(form) {
    form.addEventListener('submit', this.onFormSubmit.bind(this));
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.myCircle.color = formData.elements['input-color'].value;
    this.myCircle.size = formData.elements['input-size'].value;
    this.socketService.sendData(this.socket, this.myCircle);
  }

  renderCircles(messageData) {
    let templateCircle = this.getCircleElement(messageData);
    this.circleField.replaceChildren(templateCircle);
  }

  getCircleElement(payload) {
    let div = document.createElement('div');
    div.className = 'circle';
    div.id = this.myCircle.id;
    div.style.backgroundColor = payload.color;
    div.style.height = payload.size + 'px';
    div.style.width = payload.size + 'px';
    div.style.borderRadius = 50 + '%';
    div.style.left = payload.x + 'px';
    div.style.top = payload.y + 'px';
    return div;
  }

  moveCircle() {
    this.arrCircles = this.circleField.querySelectorAll('.circle');
    this.myCirc = this.circleField.querySelector('.circle');
    // console.log('🚀 ~ moveCircle ~ this.arrCircles', this.arrCircles[0].id)
    this.myCirc.addEventListener('mousedown', this.onMouseDown.bind(this));
  }
  onMouseDown(e) {
    console.log('🚀 ~ onMouseDown ~ e', e)
    this.myCirc.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.myCirc.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseMove(e) {
    console.log('🚀 ~ onMouseMove ~ e', e)
    this.move(e.x, e.y);
    // send({
    //   type: 'move',
    //   payload: { x: e.x, y: e.y },
    // });
  }

  move(x, y) {
  console.log('🚀 ~ move ~ x, y', x, y)
    
    this.myCirc.style.left = x - 25 + 'px';
    this.myCirc.style.top = y - 25 + 'px';
  }

  onMouseUp() {
    console.log('hello onMouseUp');
    this.myCirc.removeEventListener('mousemove', this.onMouseMove.bind(this));
    this.myCirc.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }
}
