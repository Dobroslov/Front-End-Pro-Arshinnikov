class FormController {
    constructor(
        chatForm,
        listMessagesElement,
        socketService
    ) {
        this.chatForm = chatForm;
        this.listMessagesElement = listMessagesElement;
        this.socketService = socketService;
        this.initSocket();
    }

    initSocket() {
        let config = {
            onOpen: this.onSocketOpen.bind(this),
            onNewMessage: this.onNewMessage.bind(this),
            onClose: this.onSocketClose.bind(this),
            onError: this.onSocketError.bind(this),
        };
        this.socket = socketService.createSocket(config);
    }

    start() {
        this.chatForm.addEventListener('submit', this.onFormSubmit.bind(this));
    }

    onSocketOpen(event) {
        let socket = event.target;
        // проверка открылось ли соединение
        let message = {
            type: 'userLogIn',
            payload: {user: 'Новый пользователь', message: 'присоединился к чату'},
        };
        console.log('[open] Соединение установлено');

        this.socketService.sendSocketMessage(socket, message);
        console.log('Отправляем данные на сервер');
    }

    onNewMessage(msg) {
        console.log(`[message] Данные получены с сервера: ${msg.data}`, msg);
        const message = JSON.parse(msg.data);
        console.log('incomingMessage', message);
        this.renderMessage(message);
    }

    onSocketClose(event) {
        // закрытие соединения
        let message = {
            type: 'userLogOut',
            payload: {user: 'Пользователь', message: 'вышел из чата'},
        };
        this.renderMessage(message);
        if (event.wasClean) {
            console.log(
                `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
            );
        } else {
            console.log(`[close] Соединение прервано`);
            this.initSocket();
        }
    }

    onSocketError(err) {
        console.log(`[error] ${err.message}`);
    }

    renderMessage(message) {
        this.listMessagesElement.insertAdjacentHTML(
            'beforeend',
            `<p>
      ${message.payload.user}: <span class="text">${message.payload.message}</span>
    </p>`
        );
    }

    onFormSubmit(event) {
        event.preventDefault();
        let nameValue = this.getNameValue();
        let messageValue = this.getMessageValue();
        if (this.isValid(nameValue) && this.isValid(messageValue)) {
            let message = this.prepareMessage(nameValue, messageValue);
            this.socketService.sendSocketMessage(this.socket, message);
            this.resetFormData();
        }
    }

    resetFormData() {
        this.chatForm.elements['input-text'].value = '';
    }

    prepareMessage(nameValue, messageValue) {
        return {
            type: 'userMessage',
            payload: {
                user: nameValue,
                message: messageValue
            }
        };
    }

    getNameValue() {
        return this.chatForm.elements['input-name'].value;
    }

    getMessageValue() {
        return this.chatForm.elements['input-text'].value;
    }

    isValid(value) {
        return value.trim() !== '';
    }
}