class FormController {
    constructor(url, circleField, form) {
        this.socketService = new SocketService(url);
        this.circleField = circleField;
        this.initiateCircle();
        this.form = form;
        this.initSocket();
        this.submit(form);
        this.arrCircles = [];
    }

    initiateCircle() {
        this.idCircle = Date.now();
        this.myCircle = {
            id: this.idCircle,
            color: '#ff0000',
            size: 50,
            x: 50,
            y: 50,
        };
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
        let message = this.prepareMessage('add');
        this.socketService.sendData(socket, message);
        console.log('Отправляем данные на сервер');
    }

    prepareMessage(type) {
        return {
            type: type,
            payload: this.myCircle,
        };
    }

    onNewMessage(event) {
        console.log(`[message] Данны получены с сервера: ${event.data}`, event);
        const messageData = JSON.parse(event.data);
        this.renderCircle(messageData.payload);
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
        form.elements['input-color'].value = this.myCircle.color;
        form.elements['input-size'].value = this.myCircle.size;
        form.addEventListener('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.myCircle.color = formData.elements['input-color'].value;
        this.myCircle.size = formData.elements['input-size'].value;

        this.updateServerData();
    }

    updateServerData() {
        this.socketService.sendData(this.socket, this.prepareMessage('update'));
    }

    renderCircle(messageData) {
        let circleId = messageData.id;
        console.log('🚀 ~ renderCircle ~ messageData', messageData)

        let circle = this.getCircleElement(circleId);
        if (null !== circle) {
            circle.remove();
        }
        circle = this.createCircleElement(circleId);
        this.fillCircleElement(circle, messageData);
        this.circleField.append(circle);
    }

    fillCircleElement(circle, payload) {
        circle.style.backgroundColor = payload.color;
        circle.style.height = payload.size + 'px';
        circle.style.width = payload.size + 'px';
        circle.style.borderRadius = 50 + '%';
        circle.style.left = payload.x + 'px';
        circle.style.top = payload.y + 'px';
    }

    getCircleElement(id) {
        return document.getElementById(id);
    }

    createCircleElement(id) {
        let result = document.createElement('div');
        result.className = 'circle';
        result.id = id;
        return result;
    }

    moveCircle() {
        let myCircEl = this.getCircleElement(this.idCircle);

        myCircEl.addEventListener('mousedown', this.dragAndDrop.bind(this));
    }

    dragAndDrop(e) {
        let myCircEl = this.getCircleElement(this.idCircle);
        myCircEl.style.position = 'absolute';
        this.onMouseMove(e);
        document.body.appendChild(myCircEl);
        myCircEl.style.zIndex = 1000;
        document.onmousemove = this.onMouseMove.bind(this);
        // 4. отследить окончание переноса
        myCircEl.addEventListener('mouseup', this.onMouseUp.bind(this));
        myCircEl.addEventListener('dragstart', function () {
            return false;
        })
    }

    onMouseMove(e) {
        this.move(e.pageX, e.pageY);
    }

    move(x, y) {
        let element = this.getCircleElement(this.idCircle);
        let Xvalue = x - element.offsetWidth / 2;
        let Yvalue = y - element.offsetHeight / 2;
        element.style.left = Xvalue + 'px';
        element.style.top = Yvalue + 'px';
        this.myCircle.x = Xvalue - 10;
        this.myCircle.y = Yvalue - (this.form.offsetHeight + element.offsetHeight / 2);
    }

    onMouseUp() {
        let myCircEl = this.getCircleElement(this.idCircle);
        document.onmousemove = null;
        myCircEl.removeEventListener('mouseup', this.onMouseUp.bind(this));
        this.updateServerData();
    }
}
