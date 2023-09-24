
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/database");
const userController = require("./database/controller/userController");
const app = express();

// Use CORS middleware
app.use(cors());

const http = require('http').createServer(app); 
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
  allowEIO3: true 
});

const port = 5000;

const onlineUsers = new Map();

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join', (username) => {
    onlineUsers.set(socket.id, username);
    io.emit('updateUsers', Array.from(onlineUsers.values()));
    console.log("joined", onlineUsers);
  });

  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    console.log("disconnected", onlineUsers);

    
    const username = onlineUsers.get(socket.id);
    onlineUsers.delete(socket.id);

    io.emit('updateUsers', Array.from(onlineUsers.values()));
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/signup", userController.signup);
app.post("/api/login", userController.login);


http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
