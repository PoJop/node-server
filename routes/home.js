const express = require("express");
const router = express.Router();

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  return res.status(200).json({
  title: "Express Testing",
  message: "The app is working properly!",
});
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
module.exports = router;
