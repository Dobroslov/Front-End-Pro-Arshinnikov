const url = 'wss://fep-app.herokuapp.com/';
const listMessages = document.getElementById('window-list-messages');
const chatForm = document.forms['chat-form'];

const socketService = new SocketService(url);
const controller = new FormController(chatForm, listMessages, socketService);

controller.start()
