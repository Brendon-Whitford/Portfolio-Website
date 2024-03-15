//--------------------------------------------------
//Defines socket requests to interact with the server
//--------------------------------------------------
import {connectSocket, disconnectSocket, getSocket} from "../Socket/socket";

export const socketActions = {
  createConnection,
  removeConnection,

  createRoom,
  joinRoom,
  leaveRoom,
  sendMessage,
};

function createConnection() {
  const socket = getSocket(); 
  if (!socket) {
    connectSocket();
  }
}
function removeConnection() {
  const socket = getSocket(); 
  if (socket) {
    disconnectSocket();
  }
}
function createRoom(roomName) {
  const socket = getSocket(); 
  if (socket) {
    socket.emit('createRoom', roomName);
  }
}
function joinRoom(roomName) {
  const socket = getSocket(); 
  if (socket) {
    socket.emit('joinRoom', roomName);
  }
}
function leaveRoom(roomName) {
  const socket = getSocket(); 
  if (socket) {
    socket.emit('leaveRoom', roomName);
  }
}
function sendMessage(roomName, message) {
  const socket = getSocket(); 
  if (socket) {
    socket.emit('sendMessage', roomName, message);
  }
}