class SocketService {
  constructor(url) {
    this._url = url;
  }

  createSocket(config) {
    let socket = new WebSocket(this._url);

    socket.onopen = config.onOpen;
    socket.onmessage = config.onNewMessage;
    socket.onclose = config.onclose;
    socket.onerror = config.onError;
    
    return socket;
  }

  sendData(socket, data) {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(data));
    }
  }
}
