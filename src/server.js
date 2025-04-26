require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust for production
    methods: ["GET", "POST"],
  },
});

// Attach io instance to app for controllers to use
app.set('io', io);

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('joinMatch', (matchId) => {
    socket.join(matchId);
  });

  socket.on('leaveMatch', (matchId) => {
    socket.leave(matchId);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});