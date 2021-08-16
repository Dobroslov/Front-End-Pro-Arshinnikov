class SocketService {
    constructor(url) {
        this.url = url;
    }

    createSocket(config) {
        let socket = new WebSocket(this.url);

        socket.onopen = config.onOpen;
        socket.onmessage = config.onNewMessage;
        socket.onclose = config.onClose;
        socket.onerror = config.onError;

        return socket;
    }

    sendSocketMessage(socket, message) {
        if (socket.readyState === WebSocket.OPEN)
            socket.send(JSON.stringify(message));
    }
}